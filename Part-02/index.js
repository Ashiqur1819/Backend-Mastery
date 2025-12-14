const fs = require('fs');

// fs.writeFile("era.txt", "Era is a pagli.", (err) => {
//     if(err){
//         console.log("I face error", err)
//     }else{
//         console.log("Everything is ok")
//     }
// })

fs.appendFile("era.txt", " But she is very honest.", (err) => {
    err ? console.log("I face error") : console.log("Done")
})