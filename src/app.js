const yargs = require('yargs')
const fs = require('fs')

const { listNotes } = require('./notes')

const dataSourcePath = process.env.SOURCE || './res/notes.txt'
const dataSource = () => {
    const fileContents = fs.readFileSync(dataSourcePath, { encoding: 'utf-8' })
    if (!fileContents) return ''
    return fileContents
}


yargs.command(
    'list',
    'List all notes',
    {},
    (args) => listNotes(dataSource)
)

yargs.argv



