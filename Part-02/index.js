const fs = require('fs');

fs.writeFile("era.txt", "Era is a pagli", (err) => {
    if(err){
        console.log("I face error", err)
    }else{
        console.log("Everything is ok")
    }
})