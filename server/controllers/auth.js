var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');

function createUserToken(user){
	var timestamp = new Date().getTime();
	return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signup = function(req, res, next){
	var email = req.body.email;

	var password = req.body.password;

	if(!email || !password){
		return res.status(418).send({error: 'You must provide email and password.'})
	}

	User.findOne({email: email}, function(err, existingUser){
			if(err) {
				return next(err);
			}
			if(existingUser){
				//return res.status(418).send(err);
				return res.status(418).send("There was an error with your email");
			}

			var user = new User({
				email: email,
				password: password
			});

			user.save(function(err){
				if(err){
					return next(err);
				}
				res.json({token: createUserToken(user)});
			});
	});
}

exports.signin = function(req, res, next){
	res.send({ token: createUserToken(req.user)})
}