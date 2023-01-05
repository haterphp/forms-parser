const template = (content, className, type = 'button') => {
    return `
        <button class="${className}" type="${type}">${content}</button>
    `.trim()
}

export default template