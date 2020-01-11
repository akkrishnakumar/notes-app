import { FileDB } from './datasource/fileDS'
import { DataSource } from './datasource/datasource'

export const loadNotes = (dataSource = () => undefined) => dataSource()

export const listNotes = (dataSource = () => undefined) => {
    console.log(
        `Notes:\n${dataSource()
            .split('\n')
            .map((note, index) => `${index + 1}. ${note}`)
            .join('\n')
        }`
    )
}

export class Notes {
    private dataSource: DataSource

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource
    }

    addNote(note: string): string {
        if (this.dataSource.write(note)) {
            return note
        } else {
            return ''
        }
    }
}