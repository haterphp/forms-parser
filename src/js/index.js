import {DataRepository} from "./data.js";
import {Field, FormCreator} from "./form/index.js";

const container = document.getElementById('container')

const repository = new DataRepository()
const form = new FormCreator({
    submit: (_, state) => {
        console.log(state)
    }
})

const formRenderCallback = (_, key) => {
    if (key === null) return;
    if (form.isExistContainer) form.remove()

    const data = repository.getRepositoryByName(key)
    form.create(data).render(container)
}

void async function () {
    await repository.loadData()

    const keys = repository.dataKeys
    const selectVariants = [
        { value: null, label: 'Выберете тест', disabled: true, selected: true },
        ...keys.map((key) => ({
            value: key,
            label: repository.getRepositoryByName(key).title ?? "Default title"
        }))
    ]

    new Field(
        {
            label: "Выберете форму",
            attrs: {
                type: 'select',
                name: 'key',
                variants: selectVariants
            }
        },
        formRenderCallback
    ).insertToContainer(container)
}()