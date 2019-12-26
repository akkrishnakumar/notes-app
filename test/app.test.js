
let output = '';
const spyLogger = (input) => output += input

global.console = {
    log: jest.fn(spyLogger),
    info: jest.fn(spyLogger),
    error: jest.fn(spyLogger)
  }


test(
    'list command should list all notes',
    () => {
        process.argv.push("list")
        require("../src/app.js");
        expect(global.console.log).toHaveBeenCalledWith("list command called")
    }
)