const template = (title, description = null) => {
    return `
        <div class="border rounded-md border-slate-300 p-7 bg-white border-t-8 border-t-slate-500">
            <h1 class="text-4xl">${title}</h1>
            ${ description ? `<p class="mt-4">${description}</p>` : '' }
        </div>
    `.trim()
}

export default template