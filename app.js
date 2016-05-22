var express = require('express');
var exphbs  = require('express-handlebars');
var request = require('request');
 
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 


app.get('/', function (req, res) {
	var url = 'https://randomuser.me/api/';
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	var user = JSON.parse(body).results[0];
	  	res.render('home', user);
	  } else {
	  	res.render('error')
	  }
	})
    
});
 
app.listen(3000);