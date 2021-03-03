
const fs = require('fs')
const express = require('express');
const app = express();
var b = {
    "name":"swati",
    "age":20,
    "course":"js",
    "reletionship":"commited"
}
app.post('/Mydata', (req,res) => {
    res.send(b)
    });
    fs.writeFile('user_Data.json',JSON.stringify(b),(err,data)=> {
    console.log("done done");
})
app.listen(8000)
