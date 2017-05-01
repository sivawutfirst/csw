var express = require('express-session'),
app = express(),
session = require('express-session'),
cookieParser = require('cookie-parser');

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(function(req, res, next) {
	var sess = req.session
	if (sess.views) {
		sess.views++
	} else {
		sess.views = 1
	}
})

app.use(cookieParser('keyboard cat'))
app.get('/ck_get', function(req, res) {
	res.send(req.cookies)
})
app.get('/ck_set', function(req, res) {
	res.cookie('a', 10)
	res.cookie('foo', 'My Foo Text')
	res.cookie('bar', 'My Bar Text')
	res.send('ok')
})
app.listen(8000);
console.log('server is running');
