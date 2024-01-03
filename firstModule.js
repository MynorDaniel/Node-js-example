const app = require("./app");


function showVar(){
    console.log(app.globalVar);
}
function modifyVar(){
    app.globalVar = "new value"
    console.log(app.globalVar)
}
module.exports = {
    showVar,
    modifyVar
}