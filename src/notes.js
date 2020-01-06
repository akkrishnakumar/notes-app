const loadNotes = (dataSource = () => undefined) => dataSource()

const listNotes = (dataSource = () => undefined) => {
    console.log(
        `Notes:\n${dataSource()
            .split('\n')
            .map((note, index) => `${index + 1}. ${note}`)
            .join('\n')
        }`
    )
}

module.exports = {
    loadNotes,
    listNotes
}