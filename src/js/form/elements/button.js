import {Element} from "../common/dom.js";
import Template from '../templates/button.js';

const makeButtonStyles = (background, text, border = true) => [
    'px-3 py-2',
    border ? `border` : 'border-0',
    'rounded-md',
    'transition-color',
    background,
    text
].join(' ')

const TYPES = {
    submit: {
        content: "Отправить",
        type: 'submit',
        className: makeButtonStyles('bg-slate-700 hover:bg-slate-600', 'text-white')
    },
    clear: {
        content: "Очистить форму",
        type: 'reset',
        className: makeButtonStyles('bg-transparent hover:bg-slate-200', 'text-slate-600', false)
    }
}

class Button extends Element {
    constructor(options) {
        const {content, className, type} = Button.#makeButtonByType(options)
        const dom = Template(content, className, type)
        super(dom);
        this._render()
    }

    static #makeButtonByType(type) {
        const styles = TYPES[type]
        if (styles === undefined) throw new Error(`Button type '${type}' not found`)
        return styles
    }
}

export {Button}