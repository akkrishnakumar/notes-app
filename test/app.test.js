const fs = require('fs')

let output = '';
const spyLogger = (input) => output += input

global.console = {
    log: jest.fn(spyLogger),
    info: jest.fn(spyLogger),
    error: jest.fn(spyLogger)
}

const testDataSourceFile = './res/test/notes-test.txt'
process.env.SOURCE = testDataSourceFile

beforeAll(
    () => resetTestDataSource()
)

test(
    'list command should list all notes',
    () => {
        process.argv.push("list")
        require("../src/app.js");
        expect(global.console.log).toHaveBeenCalledWith(testData)
    }
)

const resetTestDataSource = () => {
    console.log("Resetting test datasource...")
    fs.writeFileSync(testDataSourceFile, testData, { flag: 'w' })
}

const testData =
    `NOTES:
1. Buy groceries
2. Pay Electric Bill
3. Walk the dog.`