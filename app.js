// const { log } = require("console")
// const name = require("./firstModule")
// const sayHi = require("./utils")

// //os

// const os = require("os")
// const infoOs = {
//     userInfo: os.userInfo(),
//     name: os.type(),
//     realease: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// //path

// const path = require("path")

// const pathMethods = {
//     sep: path.sep,
//     filePath: path.join("folder", "text.txt"),
//     absolute: path.resolve(__dirname, "folder", "text.txt")
// }

// //fs sync

// const fs = require("fs")

// const first = fs.readFileSync("./contentFolder/first.txt", "utf8")
// const second = fs.readFileSync("./contentFolder/second.txt", "utf8")

// fs.writeFileSync("./contentFolder/third.txt",  first + " " + second, {flag: "a"})

// //fs async

// fs.readFile("./contentFolder/first.txt", "utf8",(err, result) => {
//     if(err){
//         return
//     }
//     const first = result
// })

// http

// const http = require("http")
// const server = http.createServer((req, res) => {
//     if(req.url=== "/"){
//         res.write("Home page")
//     }else if(req.url=== "/about"){

//         res.write("About page")
//     }else{
//         res.write("Error") 
//     }
//     res.end()
// })
// server.listen(5000, () => {
//     console.log("Server listening on port 5000")
// })

//practicing

//globals

// let globalVar = "Hi since global var"
// module.exports = {
//     globalVar
// }

// let firstModule = require("./firstModule.js")

// firstModule.showVar()
// firstModule.modifyVar()

//modules

// let sum = require("./sum")
// let rest = require("./rest")

// sum.sum(3,2)
// rest.rest(3,2)

//os

// let sistemInfo = require("./systemInfo")

// sistemInfo.showInfo(sistemInfo.sistemInfo)

//path

// let showPath = require("./filePaths")
// showPath.showPath()

//fs

// let readFile = require("./readFile")
// readFile.readFile("./text.txt")

//util

// let showError = require("./util")

// try {
//     showError.showError()
// } catch (error) {
//     console.error("Error procces:", error.err2)
// }

//process

// let process = require("./processInfo")
// process.showProcess()

// let process = require("node:process")
// let fileOp = require("./fileOperations")

// fileOp.readFs("./text.txt")

// async function main(){
//     process.stdout.write("Write something")
//     process.stdin.on("data", async (data) => {
//         const content = data.toString().trim()
//         await fileOp.writeFs("newtxt.txt", content)
//         await fileOp.readFs("./newtxt.txt")
//         process.exit()
//     })
// }
// main()

// const eventEmmiter = require("./eventEmmiter")

// eventEmmiter.start()
// eventEmmiter.end()







