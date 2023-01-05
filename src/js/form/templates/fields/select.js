import DefaultLayout from './common/index.js'
import {makeInputProps} from "./functions/make-props.js";

const SelectItemTemplate = (value, label, disabled = false, selected = false) => `
    <option value="${value}" ${disabled ? 'disabled' : ''} ${ selected ? 'selected' : '' }>${label}</option>
`.trim()

const template = (label, attrs, variant) => {
    return DefaultLayout(label, `
        <select class="border border-slate-300 px-3 py-2 rounded-md outline-0 w-full max-w-[350px]" ${makeInputProps(attrs)}>
            ${variant.map((item) => SelectItemTemplate(item.value, item.label, item.disabled, item.selected)).join('')}
        </select>
    `)
}

export default template