const fs = require('fs');

// reading files

fs.readFile('./text.txt', (err, data) => {
    if (err) {
        console.log("error!!",err);
    }
    console.log(data.toString())
})