const getIndex = (data, title) => {
    return data.map((item) => item.name).indexOf(title)
}

export default getIndex