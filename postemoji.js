var fs = require('fs');
const express = require('express');
const app = express();

app.post("/post", (req, res) => {
  fs.readFile("emoji.json", function (err, data) {
    let myData = JSON.parse(data);
    let newPromise = new Promise((resolve, reject) => {
      fs.appendFile("newemoji.json", JSON.stringify(myData, indent = 5), (err, data) => {
        let d = JSON.stringify(data);
        if (err) {
          reject("batter luck next time")
        }
        resolve(myData)
        console.log(d)
      })
    }).then(data => res.send(data), data => res.send(data))
  })
})

app.listen(8000)

