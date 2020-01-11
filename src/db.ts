import fs from 'fs'

export class DB {
    private path: string

    constructor(path = '') {
        this.path = path
    }

    read() {
        const fileContents = fs.readFileSync(this.path, { encoding: 'utf-8' })
        if (!fileContents) return ''
        return fileContents
    }

    write(data: string): string {
        try {
            fs.writeFileSync(this.path, data, { encoding: 'utf-8' })
            return data
        } catch (e) {
            console.log(e)
            return ''
            
        }
    }

}

