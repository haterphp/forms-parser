import {Element} from "../../../common/dom.js";
import CheckboxTemplate from "../../../templates/fields/checkbox.js";

class CheckboxButtons extends Element {
    constructor(label, attrs, onChange = null) {
        const dom = CheckboxTemplate(label, CheckboxButtons.#clearAttrs(attrs), attrs.variants)
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

    #onChange() {
        const values = [...this._dom.querySelectorAll('input[type=checkbox]:checked')].map((item) => item.value)
        this._onChange(values)
    }

    static #clearAttrs(attrs) {
        const newAttrs = Object.assign({}, attrs)

        delete newAttrs.type
        delete newAttrs.variants

        return newAttrs
    }
}

export { CheckboxButtons }