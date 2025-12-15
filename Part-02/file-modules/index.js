const fs = require('fs');

// fs.writeFile("era.txt", "Era is a pagli.", (err) => {
//     if(err){
//         console.log("I face error", err)
//     }else{
//         console.log("Everything is ok")
//     }
// })

// fs.appendFile("era.txt", " But she is very honest.", (err) => {
//     err ? console.log("I face error") : console.log("Done")
// })

// fs.rename("era.txt", "nusrat.txt", (err) =>{
// err ? console.log("I face error") : console.log("Done")
// })

// fs.copyFile("nusrat.txt", "./copy/era.text", (err) => {
//     err ? console.log("I face error") : console.log("Copy Done")
// })

// fs.unlink("nusrat.txt", (err) => {
//     err ? console.log("I face error") : console.log("Remove file Done")
// })

// fs.rm("./copy", {recursive: true}, (err) => {
//     err ? console.log("I face error") : console.log("Remove folder Done")
// })

// fs.readFile("hello.txt", "utf-8", (err, data) => {
//      err ? console.log("I face error") : console.log("READ DATA :", data)
// })

// fs.mkdir("era.js", (err) => {
//     err ? console.log("I face error") : console.log("Folder Created")
// })

// fs.rename("hi.txt", "./demo/hi.txt", (err) => {
//     err ? console.log("I face error") : console.log("File moved")
// })

fs.rm("./demo", {recursive: true}, (err) => {
    err ? console.log("I face error") : console.log("Remove the demo folder")
})

