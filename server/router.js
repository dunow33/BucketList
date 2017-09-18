var Auth = require('./controllers/auth');
var User = require('./models/user');

module.exports = function(app){
	app.post('/signup', Auth.signup);
}

/*module.exports = function(app) {
	app.get('/', function(req, res, next) {
		res.send('HELLO HOMEPAGE');
	});

	app.get('/signup', function(req, res, next){
		res.send('Hey folks, thanks for signing up!!');
	});
}*/