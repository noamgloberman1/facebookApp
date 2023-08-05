var express = require('express');
var cors = require('cors')
var logic = require('./logic');
var app = express();
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())


app.post('/validateSession', urlencodedParser, function(req, res){

    try {

        const sessionID = req.body.sessionID;
        console.log(sessionID);

        if (sessionID === undefined) {

            res.send({
                status: false
            })

        }
        else {
            res.send({
                status: true
            })
        }
        

    }
    catch (e){

        res.send({
            status: "fails",
            msg: e
        })

    }

});


app.post('/login', urlencodedParser, function(req, res){

    try {

        // get the username and password
        const username = req.body.username;
        const password = req.body.password;

        // check if the username and password are good
        if (username === "noam" && password === "1234") {

            // generate a sessionID and return it
            var sessionID = logic.generateSession();
            res.send({
                status: "ok",
                sessionID: sessionID
            });    

        }
        else {

            res.send({
                status: "fail"
            })

        }
    
    }
    catch (e) {
        
        res.send({
            status: "failed",
            reason: e.message
        })

    }

});

app.listen(8080);