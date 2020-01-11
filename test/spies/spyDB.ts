import { DataSource } from '../../src/datasource/datasource'

export class SpyDB implements DataSource {
    private data: string[];

    constructor(data: Array<string>) {
        this.data = data
    }

    read(): string {
        return this.data.join()
    }

    write(data: any): boolean {
        this.data.push(data)
        return true
    }

}