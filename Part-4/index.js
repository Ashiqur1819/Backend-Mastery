const express = require("express")

const app = express()

app.use((req, res, next) => {
    console.log("This is first middleware")
    next()
})

app.use((req, res, next) => {
    console.log("This is second middleware")
    next()
})

app.get("/", (req, res) => {
    res.send("This is the homepage")
})

app.get("/about", (req, res, next) => {
    // res.send("This is the about page")
    return next(new Error("Faces some erorr"))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)