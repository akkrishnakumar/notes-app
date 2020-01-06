const notes = require('../src/notes')

let output = '';
const spyLogger = (input) => output += input

global.console = {
    log: jest.fn(spyLogger),
    info: jest.fn(spyLogger),
    error: jest.fn(spyLogger)
}

test(
    'should list notes from dataSource',
    () => {
        notes.listNotes(dataSource)
        expect(global.console.log).toHaveBeenCalledWith(testOutput)
    }
)

test(
    'should load notes from dataSource',
    () => {
        const fetchedNotes = notes.loadNotes(() => testData)
        expect(fetchedNotes).toBe(testData)
    }
)

const dataSource = () => testData.join('\n')

const testData = ['Read book', 'Pay bills']

const testOutput = 
`Notes:
1. Read book
2. Pay bills` 