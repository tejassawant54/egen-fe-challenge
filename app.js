var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname+'/public')); // Provide access to static files

app.get('/',function(req,res){                          // Send file to localhost
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000);               // Assign port: 3000

console.log('Running at port 3000');