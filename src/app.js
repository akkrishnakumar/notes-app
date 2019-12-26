const yargs = require('yargs')

yargs.command(
    'list',
    'List all notes',
    {},
    (args) => { console.log("list command called") }
)

yargs.argv
