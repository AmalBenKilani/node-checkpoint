const fs = require('fs')
const asynData = fs.readFile(process.argv[2], function (err, data) {
    if (err) {
        console.log(err)
    }
    const rslt = data.toString().split('\n').length - 1
    console.log(rslt)
})