let fs = require("node:fs/promises")

async function readFs(f){

    try {
      let file = await fs.readFile(f, "utf8")
    console.log(file)  
    } catch (error) {
        console.log(error)
    }

}

async function writeFs(name, data){
    await fs.writeFile(name, data, "utf8")
    console.log(name)
}

module.exports = {
    writeFs,
    readFs
}