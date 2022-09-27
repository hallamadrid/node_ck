const pass = require('generate-password')
password = pass.generate({
    length:7,
    numbers : true
})
console.log(password)
// D9E302J