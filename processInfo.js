let process = require("node:process")

let objProcess = {
    version: process.version,
    arg: process.argv,
    route: process.cwd()
}

function showProcess(){
    console.log(objProcess)
    process.stdout.write("Name: ")
    process.stdin.on("data", (data) => {
        console.log("Hi " + data)
        process.exit()
    })
}

module.exports = {
    showProcess,
}