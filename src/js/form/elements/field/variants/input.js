import {Element} from "../../../common/dom.js";
import InputTemplate from "../../../templates/fields/input.js";

class Input extends Element {

    constructor(label, attrs, onChange = null) {
        const dom = InputTemplate(label, attrs)
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

}

export {Input}