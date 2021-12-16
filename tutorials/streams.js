const fs = require('fs');

const readStrem = fs.createReadStream('./stream.txt');

readStrem.on('data', (chunck) => {
    console.log("-------A chunck of Data---------")
    console.log(chunck.toString())
})
