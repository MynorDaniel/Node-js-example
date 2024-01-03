let fs = require("node:fs")

function readFile(files){
    fs.readFile(files, "utf8", (err, data) => {
    if(err){
        console.log(err)
    }else{console.log(data)}
})
}
module.exports = {
    readFile,
}