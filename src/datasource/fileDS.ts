import { DataSource } from './datasource'
import fs from 'fs'

export class FileDB implements DataSource {

    private path: string

    constructor(path = '') {
        this.path = path
    }

    read() {
        const fileContents = fs.readFileSync(this.path, { encoding: 'utf-8' })
        if (!fileContents) return ''
        return fileContents
    }

    write(data: string): boolean {
        try {
            fs.writeFileSync(this.path, data, { encoding: 'utf-8' })
            return true
        } catch (e) {
            console.log(e)
            return false   
        }
    }

}