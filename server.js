const express = require('express');
const app = express();

const fs = require('fs');

const jsonData = fs.readFileSync(__dirname + '/data.json', "utf8", (err, jsonString) => {
    if(err){
        console.log("error");
        return;
    }
   return jsonData;
})

const dataObj = JSON.parse(jsonData);
const PORT = 8000;

app.get('/',  (request, response) => {
    response.sendFile(__dirname + '/index.html');

})

app.get('/api',(request, response) => {
    response.sendFile(__dirname + '/data.json');
})

app.get('/api/:year', (request, response) => {
    const year = request.params.year;
    response.send(dataObj.data[year]);

})

app.listen(process.env.PORT || PORT, () => {
    console.log("The server is running")
})

