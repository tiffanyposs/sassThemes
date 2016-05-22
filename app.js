var express = require('express');
var exphbs  = require('express-handlebars');
var request = require('request');
 

//secrets
var config = require('./config.json');


var app = express();
 
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
	var url = 'https://randomuser.me/api/?nat=us,dk,fr,gb';
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	var object = {}
	  	object.user = JSON.parse(body).results[0];
	  	object.googleKey = config.googleKey;
	  	res.render('home', object);
	  } else {
	  	res.render('error')
	  }
	});
});


 
app.listen(3000);