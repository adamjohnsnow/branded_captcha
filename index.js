var express = require('express');
var bodyparser = require('body-parser')
var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

var jsFile = require('./js/passphrase')

app.listen(8080, function(){
  console.log('port is 8080!')
})

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render('index')
})

app.post('/anthony', function(req, res){
  console.log(req.body.text)
})
