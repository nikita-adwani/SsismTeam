var http = require('http');
const fs = require('fs');

let nikitaRewardData = [];
fs.readFile('./sonarewardData.json', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        let rawdata = data
        nikitaRewardData = JSON.parse(rawdata);
        // console.log(nikitaRewardData);
    })
    //create a server object:
http.createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");



    //res.write ("response")
    res.write(JSON.stringify(nikitaRewardData)); //write a response to the client


    res.end(); //end the response
}).listen(1011); //the server object listens on port 8080