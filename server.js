var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const path = require('path');

var mongoUtilities = require('./src/utils/mongoUtilities');

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  mongoUtilities.createDatabase("TestDb");
});

app.post('/login', function(req, res)  {
    mongoUtilities.insertData("TestDB", "userLogins", req.body, function(err, result) {
        if (err) throw err;
        console.log('result', result)
        return result;
    });
    res.send(); 
});


app.get('/createPatient', function() {
    mongoUtilities.createCollection("TestDB", "Patients");
    mongoUtilities.insertData("TestDB", "Patients", function(err, result) {
        if (err) throw err;
        return result;
    });
    res.send();
});

  
app.listen(5000, function() {
console.log('login RESTful API server started on: 5000');

});





