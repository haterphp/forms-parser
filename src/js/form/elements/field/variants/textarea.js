import {Element} from "../../../common/dom.js";
import TextareaTemplate from "../../../templates/fields/textarea.js";

class Textarea extends Element {
    constructor(label, attrs, onChange = null) {
        const dom = TextareaTemplate(label, Textarea.#clearAttrs(attrs))
        super(dom)

        this._onChange = onChange
        this._render()
    }

    _bindListeners() {
        if(this._onChange) this._dom.addEventListener('input', (e) => this._onChange(e.target.value))
    }

    _unbindListeners() {
        if(this._onChange) this._dom.removeEventListener('input', (e) => this._onChange(e.target.value))
    }

    static #clearAttrs(attrs) {
        const newAttrs = Object.assign({}, attrs)
        delete newAttrs.type
        return newAttrs
    }
}

export { Textarea }