let util = require("node:util")

function showError(){
    let err = util.format("Error message: %s", "details")
    let err2 = new Error(err)
    console.log(err2)
    throw err2
}

module.exports = {
    showError,
}