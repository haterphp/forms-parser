class DataRepository {

    #data
    constructor() {
        this.#data = {
            'test-1': undefined,
            'test-2': undefined,
            'test-3': undefined,
        }
    }

    get dataKeys() {
        return Object.keys(this.#data)
    }

    async loadData() {
        const keys = Object.keys(this.#data)
        for (const key of keys) {
            try {
                const result = await fetch(`./src/data/form-${key}.json`).then(res => res.json())
                this.#data[key] = result
            } catch (e) {
                throw new Error(`Json file form-${key}.json not found`)
            }
        }
    }

    getRepositoryByName(key) {
        if (this.#data[key] !== undefined) return this.#data[key]
        throw new Error(`Key ${key} not found`)
    }
}


export { DataRepository }