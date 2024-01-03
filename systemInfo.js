let os = require("node:os")
let sistemInfo = {
    name: os.type(),
    version: os.version(),
    arch: os.arch(),
    cpus: (os.cpus()).length
}
function showInfo(info){
    console.log(info)
}
module.exports = {
    sistemInfo,
    showInfo
}