import fs from 'fs'

export class DB {

    constructor(path = '') {
        this.path = path
    }

    read() {
        const fileContents = fs.readFileSync(this.path, { encoding: 'utf-8' })
        if (!fileContents) return ''
        return fileContents
    }

    write(data) {
        const err = fs.writeFileSync(this.path, data, { encoding: 'utf-8' })
        if (err) return ''
        return data
    }

}

