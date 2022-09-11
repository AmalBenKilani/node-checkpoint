const fs = require('fs')
const path = require('path')

module.exports = function (directory, extension, cb) {

    fs.readdir(directory, function (err, list) {
        if (err) {
            return cb(err)
        }
        let arr = []
        for (let value of list) {
            if (path.extname(value) === ("." + extension)) {
                console.log(value)
                arr.push(value)
            }
        }
        cb(null, arr)

    })
}
