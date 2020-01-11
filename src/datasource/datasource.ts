export interface DataSource {
    read(): string
    write(data: any): boolean
}