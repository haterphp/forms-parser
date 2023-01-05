const makeInputProps = (obj) => {
    if (obj.placeholder === undefined) obj.placeholder = 'Введите ваш ответ'
    return Object.entries(obj).map(([key, value]) => key + "=" + `"${value}"`).join(' ')
}

export { makeInputProps }
