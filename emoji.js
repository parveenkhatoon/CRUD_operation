var fs = require('fs');
const express = require('express');
const app = express();
app.get('/emoji',(req,res) =>{
    let emojidata;
    const myPromise = new Promise((resolve,reject)=>{
        fs.readFile('emoji.json',(err,data)=>{
            emojidata = JSON.parse(data)
            if(err){
                reject("not find emoji")
            }
            resolve(emojidata)
        })
    })
    myPromise.then(data => res.send(data));
});
app.listen(8080)
