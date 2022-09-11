const mymodule = require('./mymodule.js')
const extension = process.argv[3]
const directory = process.argv[2]

function cb(err, list) {
    if (err) {
        console.log("there is an error")
    }

    // console.log(list)

}

mymodule(directory, extension, cb)
