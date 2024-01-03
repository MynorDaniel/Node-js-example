let events = require("./eventEmmiter")

function handler(event){
    console.log("event " + event)
}

events.events.on("start", () => {
    handler("start")
})
events.events.on("start", () => {
    handler("end")
})