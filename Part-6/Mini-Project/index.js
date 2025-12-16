const express = require("express")

const app = express()
const port = 5000
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

// app.get("/", (req, res) => {
//     res.render("index")
// })

app.get("/", (req, res) => {
    res.send("Server is running")
})


app.get("/profile/:username", (req, res) => {
    res.send(req.params.username)
})

app.get("/profile/:username/:occupation", (req, res) => {
    res.send(`<h1>Welcome ${req.params.username}, as a ${req.params.occupation}</h1>`)
})


app.listen(port, () => {
    console.log("The server is running on port:", port)
})


