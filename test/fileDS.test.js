import { FileDB } from '../src/datasource/fileDS'
import fs from 'fs'

jest.mock('fs')

const testData = ['some text1', 'some text2', 'some text3']
const testString = (data = []) => data.join('\n')

const addData = (data) => {
    testData.push(data)
    return undefined
}

test(
    'db should read data from source',
    () => {

        const db = new FileDB()
        fs.readFileSync.mockReturnValue(testString(testData))   

        const input = db.read()
        expect(input).toBe(testString(testData))
    }
)

test(
    'db should write data to source',
    () => {

        const input = 'some text4'
        const db = new FileDB()
        fs.writeFileSync = jest.fn(() => addData(input))
        db.write(input)
        
        fs.readFileSync.mockReturnValue(testString(testData))   
        const output = db.read()

        expect(output).toBe(testString(testData))

    }
)
