const express = require("express")

const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("<h2>The server is running</h2>")
})

app.listen(port, () => {
    console.log("The server is running on port:", port)
})