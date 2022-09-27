
const fs = require('fs');

let z = fs.readFile("welcome.txt","utf-8",(err,data)=> {
    if (err) throw err
    else console.log(data)
})