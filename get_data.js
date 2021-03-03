
// var fs = require('fs');
// var a = {
//     "Name" :"praveen",
//     "age" :"19",
//     "course":"js"
// }
// fs.writeFile("user_Data.json", JSON.stringify(a), err => { 
//     // Checking for errors 
//     if (err) throw err;  
//     console.log("Done writing"); // Success 
// }); 

// fs.readFile('User_Data.json',function(err,data){
//     if (err) throw err; 
//     var userdata = JSON.parse(data)
//     console.log(userdata)
// })

var fs = require('fs');
const express = require('express');
const app = express();
app.get('/a',(req,res) => {
    let da;
    const myPromise = new Promise((resolve,reject)=>{
        fs.readFile("user_Data.json",(err,data) => { 
            da =  JSON.parse(data);
            //Checking for errors 
            if(err){
                reject("next time")
            }
            resolve(da)
            })
    })
    myPromise.then(data => res.send(data));
    });
   
app.listen(3000)





// const http = require('http');
// var fs = require('fs');
// fs.readFile('User_Data.json',function(err,data){
// http.createServer((request, response) => {
//   if (request.method === 'POST' && request.url === '/echo') {
//         var userdata = JSON.parse(data)
//         console.log(userdata)
//         var a = {
//             course:"javascript",
//             cost:"1200/-"
//         };
//         data.push(updata);
//         fs.appendFile("User_Data.json",JSON.stringify(a),err=>{
//             if (err)throw err;
//             console.log("updata")
    
//         })
    
//   } else {
//     response.statusCode = 404;
//     response.end();
//   }

// }).listen(3000);
// })
