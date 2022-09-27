const http = require('http');
const port = 3000;


const server = http.createServer(function(req,res){
    res.write('<h1>Hello Node!!!!</h1>')
    res.end()
})
server.listen(port, function(error) {
    if (error) {
        console.log('Somthing went wrong' , error)

    } else {
        console.log('Server is listening on part' + port)
    }
})