const User = require('../models/user.js');
const jwt = require('jwt-simple');
const config = require('../config.js');

function createUserToken(user){
	let timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next){
	let email = req.body.email;
	let password = req.body.password;

	if (!email || !password) {
		return res.status(418).send({error: 'You must provide an email and password.'});
	}
	User.findOne({ email: email}, function(err, existingUser){
		if (err) {
			return next(err);
		}//handles search error

		if (existingUser) {
			return res.status(418).send("Email is in use");
		}//handles existing users

		let user = new User({
			email: email,
			password: password
		});
		user.save(function(err){
			if(err) {return next(err); }
			//Respond to request indicating the user was created
			res.json({token: createUserToken(user)});
		});
	});
}

exports.signin = function(req, res, next) {
	//user has already had their email and password authenticated
	//we just need to give them a token
	let token = createUserToken(req.user);
	res.send({token: token });
}