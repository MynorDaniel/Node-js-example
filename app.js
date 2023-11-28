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
//     if(req.url=== "/about"){
//         res.write("about")
//     }
//     res.end("Error")
// })
// server.listen(5000)

//npm

