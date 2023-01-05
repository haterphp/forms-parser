import {Element} from "../../../common/dom.js";
import RadioTemplate from "../../../templates/fields/radio.js";

class RadioButtons extends Element{
    constructor(label, attrs, onChange = null) {
        const dom = RadioTemplate(label, RadioButtons.#clearAttrs(attrs), attrs.variants)
        super(dom)

        this._onChange = onChange
        this._render()
    }

    _bindListeners() {
        if(this._onChange) this._dom.addEventListener('change', this.#onChange.bind(this))
    }

    _unbindListeners() {
        if(this._onChange) this._dom.removeEventListener('change', this.#onChange.bind(this))
    }

    #onChange(e) {
        this._onChange(e.target.value)
    }

    static #clearAttrs(attrs) {
        const newAttrs = Object.assign({}, attrs)

        delete newAttrs.type
        delete newAttrs.variants

        return newAttrs
    }
}

export { RadioButtons }