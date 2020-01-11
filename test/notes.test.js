const { loadNotes, listNotes } = require('../src/notes')

import { Notes } from '../src/notes'
import { SpyDB } from './spies/spyDB'

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
        listNotes(dataSource)
        expect(global.console.log).toHaveBeenCalledWith(testOutput)
    }
)

test(
    'should load notes from dataSource',
    () => {
        const fetchedNotes = loadNotes(() => testData)
        expect(fetchedNotes).toBe(testData)
    }
)

test(
    'should add a note to datasource',
    () => {
        const note = 'Fuel TopUp'
        const notes = new Notes(spyDB)

        expect(notes.addNote(note)).toBe(note)
        expect(testData).toContain(note)
    }
)

const dataSource = () => testData.join('\n')

const testData = ['Read book', 'Pay bills']
const testOutput =
    `Notes:
1. Read book
2. Pay bills`

const spyDB = new SpyDB(testData)