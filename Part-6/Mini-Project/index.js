const express = require("express")

const app = express()
const port = 5000
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log("The server is running on port:", port)
})


