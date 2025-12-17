const http = require('node:http')

const server = http.createServer((req, res) => {
    res.end("The server is running")
})

server.listen(3000, () => {
    console.log("The server is running on: ", 3000)
})