var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article1',function(req,res){
   res.send('See article one here'); 
});
//when request is made to the path specified by the first parameter of the get function
//it sends the resource pointing to that request
app.get('/article2',function(req,res){
   res.send('See article two here'); 
});
app.get('/article3',function(req,res){
   res.send('See article three here'); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

res.send(counter.toString());
app.get('/counter',function(req,res)
{
    var counter=0;
    counter=counter+1;
    res.send(counter.toString());
    
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
