let path = require("node:path")

let textPath = path.join(__dirname, "text.txt")

let objPath = {
    path: textPath,
    ext: path.extname(textPath),
    name: path.basename(textPath),
    other: path.resolve(textPath)
}

function showPath(){
    console.log(objPath)
}

module.exports = {
    showPath,
}
