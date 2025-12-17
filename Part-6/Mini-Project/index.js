const express = require("express")

const app = express()
const port = 5000
const path = require("path")
const fs = require('node:fs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
    res.render("index", {files: files})
})
})

app.post("/create", (req, res) => {
    console.log(req.body)
})




app.listen(port, () => {
    console.log("The server is running on port:", port)
})


