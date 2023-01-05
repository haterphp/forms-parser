import {Title} from "./elements/title.js";
import {Button} from "./elements/button.js";
import {Field} from "./elements/field/index.js";

class FormCreator {
    constructor(listeners = {}) {
        this.formState = {}
        this.listeners = listeners
    }

    get isExistContainer() {
        return !!this.container
    }

    create(form) {
        this.title = form.title
        this.description = form.description ?? null

        this.buttons = form.buttons ?? []
        this.fields = form.fields
        this.formState = {}

        this.#createContainer()
        return this
    }

    remove() {
        this.title = null
        this.description = null
        this.buttons = []
        this.fields = []

        this.container.remove()
    }

    render(container, withClear = false) {
        if(withClear) container.innerHTML = ''
        container.append(this.container)
        return this
    }

    #bindListeners(container) {
        container.addEventListener('submit', (e) => {
            e.preventDefault()
            if (this.listeners.submit) this.listeners.submit(e, this.formState)
        })

        container.addEventListener('reset', (e) => {
            for(const key in this.formState) {
                this.formState[key] = null
            }
            if (this.listeners.reset) this.listeners.reset(e, this.formState)
        })
    }

    #updateFormState(key, value) {
        this.formState = {
            ...this.formState,
            [key]: value
        }
    }

    #createTitle(container) {
        const title = new Title(this.title, this.description)
        title.insertToContainer(container)
    }

    #createButtons(container) {
        this.buttons.forEach((options) => {
            const button = new Button(options)
            button.insertToContainer(container)
        })
    }

    #createFields(container) {
        this.fields.forEach((options) => {
            const field = new Field(options, this.#updateFormState.bind(this))
            field.insertToContainer(container)
        })
    }

    #createContainer() {
        this.container = document.createElement('form')

        this.#createTitle(this.container)

        const fieldsContainer = document.createElement('div')
        fieldsContainer.className = 'mt-5 flex flex-col gap-5'
        this.#createFields(fieldsContainer)
        this.container.append(fieldsContainer)

        if (this.buttons.length) {
            const buttonsContainer = document.createElement('div')
            buttonsContainer.className = 'mt-5 flex gap-3 align-center'
            this.#createButtons(buttonsContainer)
            this.container.append(buttonsContainer)
        }

        this.#bindListeners(this.container)
    }
}

export { FormCreator }