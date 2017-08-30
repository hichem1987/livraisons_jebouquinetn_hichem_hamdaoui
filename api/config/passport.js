/* 
 * the author of the project
 * Hichem Hamdaoui
 * Email:hamdaoui.hichem@gmail.com
 */
var JwtStrategy = require('passport-jwt').Strategy;
 
// load up the user model
var models = require('./../model');
var config = require('./../db'); // get db config file
var User = models.User; 
module.exports  = function(passport) {
  var opts = {};
  opts.secretOrKey = config.data.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};

