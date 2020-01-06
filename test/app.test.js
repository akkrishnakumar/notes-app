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
        expect(global.console.log).toHaveBeenCalledWith(testOutput)
    }
)

const resetTestDataSource = () => {
    console.log("Resetting test datasource...")
    fs.writeFileSync(testDataSourceFile, testData.join('\n'), { flag: 'w' })
}

const testData = ['Buy groceries', 'Pay Electric Bill', 'Walk the dog']

const testOutput = 
`Notes:
${testData
    .map((note, index) => `${index + 1}. ${note}`)
    .join('\n')
}`