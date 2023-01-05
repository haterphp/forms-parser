import DefaultLayout from './common/index.js'

const RadioItemTemplate = (value, label, name) => `
    <label class="flex gap-3 cursor-pointer">
        <input type="radio" name="${name}" value="${value}" />
        <span>${ label }</span>
    </label>
`.trim()

const template = (label, attrs, variant) => {
    return DefaultLayout(label, `
        <div class="flex flex-col gap-2 items-start">
            ${variant.map((item) => RadioItemTemplate(item.value, item.label, attrs.name)).join('')}
        </div>
    `)
}

export default template