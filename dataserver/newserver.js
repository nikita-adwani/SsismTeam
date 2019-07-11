var http = require('http');
const fs = require('fs');

let rewardData = [];
fs.readFile('./rewardData.json', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        let rewarddata = data
        rewardData = JSON.parse(rewarddata);
        // console.log(rewardData);
    })
    //create a server object:
http.createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");



    //res.write ("response")
    res.write(JSON.stringify(rewardData)); //write a response to the client


    res.end(); //end the response
}).listen(9090); //the server object listens on port 9090