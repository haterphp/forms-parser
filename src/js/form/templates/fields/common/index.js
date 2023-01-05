const template = (label, children) => {
    return `
        <div class="border rounded-md border-slate-300 p-7 bg-white">
            <label class="block mb-3">${label}</label>
            ${children}
        </div>
    `.trim()
}

export default template