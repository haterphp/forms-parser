import {Input} from "./variants/input.js";
import {Textarea} from "./variants/textarea.js";
import {RadioButtons} from "./variants/radio.js";
import {Select} from "./variants/select.js";
import {CheckboxButtons} from "./variants/checkbox.js";

class Field {
    constructor(options, updateCallback) {
        this._name = options.attrs.name ?? null
        this._updateCallback = updateCallback
        if (this._name) this._updateCallback(this._name, null)

        this._input = Field.#makeControlByType(options, this._onChange.bind(this))
    }

    static #makeControlByType(options, handleOnChange) {
        const {label, attrs} = options
        switch (attrs.type) {
            case 'text':
            case 'number':
            case 'date':
            case 'datetime-local':
                return new Input(label, attrs, handleOnChange)
            case 'textarea': return new Textarea(label, attrs, handleOnChange);
            case 'radio': return new RadioButtons(label, attrs, handleOnChange);
            case 'select': return new Select(label, attrs, handleOnChange);
            case 'checkbox': return new CheckboxButtons(label, attrs, handleOnChange);
            default: return new Input(label, { ...attrs, type: 'text'}, handleOnChange)
        }
    }

    insertToContainer(container, withClear = false) {
        this._input.insertToContainer(container, withClear)
    }

    insertAfterContainer(container) {
        this._input.insertAfterContainer(container)
    }

    insertBeforeContainer(container) {
        this._input.insertBeforeContainer(container)
    }

    _onChange(value) {
        if(this._name) this._updateCallback(this._name, value)
    }

}

export {Field}