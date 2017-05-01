var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
session = require('express-session'),
cookieParser = require('cookie-parser');
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/pic')); 

app.get('/', function(req, res){
	res.render('money', {moneys: ['money']})
});

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use('/',express.static(__dirname + '/public'));
app.post('/add',urlencodedParser,function(req,res) {
	var money = parseInt(req.body.kelvin)+273;
	res.render('money',{LastExchange : [money]});
});

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use('/',express.static(__dirname + '/public'));
app.post('/add1',urlencodedParser,function(req,res) {
	var money1 = parseInt(req.body.kelvin1)*1.8+32;
	res.render('money1',{LastExchange : [money1]});
});

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use('/',express.static(__dirname + '/public'));
app.post('/add2',urlencodedParser,function(req,res) {
	var money2 = parseInt(req.body.kelvin2)*1.8-459;
	res.render('money2',{LastExchange : [money2]});
});

app.listen(8000);
console.log('server is running');