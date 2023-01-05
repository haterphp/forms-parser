class Element {
    #domString;
    constructor(domString) {
        this.#domString = domString
        this._dom = undefined
        // this.#render()
    }

    _bindListeners() {}

    _unbindListeners() {}

    _render() {
        const payload = document.createElement('div')
        payload.innerHTML = this.#domString.trim()
        this._dom = payload.firstChild
        this._bindListeners()
    }

    remove() {
        if(this._dom) {
            this._unbindListeners()
            this._dom.remove()
        }
    }

    insertToContainer(container, withClear = false) {
        if (withClear) container.innerHTML = ''
        if(this._dom) container.append(this._dom)
    }

    insertBeforeContainer(container) {
        if(this._dom) container.before(this._dom)
    }
    insertAfterContainer(container) {
        if(this._dom) container.after(this._dom)
    }
}

export { Element }