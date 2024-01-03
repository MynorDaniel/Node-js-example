let eventEmmiter = require("node:events")
let events = new eventEmmiter

function start(){
    console.log("starting process")
    events.emit("start")
}
function end(){
    console.log("ending process")
    events.emit("end")
}

module.exports = {
    start,
    end,
    events
}