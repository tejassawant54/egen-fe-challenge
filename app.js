var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules'));

app.get('/',function(req,res){
    
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000);

console.log('Running at port 3000');