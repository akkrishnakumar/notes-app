const listNotes = (dataSource) => {
    console.log(
        `Notes:\n${dataSource()
            .split('\n')
            .map((note, index) => `${index + 1}. ${note}`)
            .join('\n')
        }`
    )
}

module.exports = {
    listNotes
}