var express = require('express'),
bodyParser = require('body-parser'),
session = require('express-session'),
app = express(),
cookieParser = require('cookie-parser');

app.use(cookieParser('fah'))
app.get('/ck_get', function(req, res) {
	res.send(req.cookies)
});

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: false, saveUninitalized : false}));
app.use('/',express.static(__dirname + '/public'));
app.post('/add',urlencodedParser,function(req,res) {
	var money = parseInt(req.body.krw)+273;
	var money2 = req.session;
	money2.a = money;
	res.cookie('Money (KRW)',req.body.krw).send('Korea (KRW) : '+ req.body.krw +'<br>Money (THB) : ' + money);
});

app.get('/korea', function(req, res) {
	res.send('Last Exchange : ' + req.session.a + 'Bath')
});
app.listen(8000);
console.log('server is running');