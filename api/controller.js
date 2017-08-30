var models = require('./model');
var config = require('./db');
var jwt = require('jwt-simple');
var passport = require('passport');
require('./config/passport')(passport);
exports.RecupererLivres = function (req, res) {
    console.log('RecupererLivres');
    models.Livre.find(function (err, livres) {
        if (err) {
            return console.error(err);
        }

        res.json(livres);
    });
};
//rechercher livres par éléments
exports.RecupererLivresRecherche = function (req, res) {
    console.log('RecupererLivresRecherche');
    var re = new RegExp(req.params.search, 'i');

    models.Livre.find().or([{'Nom': {$regex: re}}, {'Auteur': {$regex: re}},{'Description':{$regex: re}}]).exec(function (err, livres) {
        if (err) {
            return console.error(err);
        }
        res.json(livres);
    });
};
//rechercher livres sur plusieurs champs
exports.RecupererLivresMultiple = function (req, res) {
    var findJSON = {
    };
    if (req.params.auteur && (req.params.auteur!=='null')&& (req.params.auteur!=='0')) {
        findJSON.Auteur = req.params.auteur;
    }
    if (req.params.category && (req.params.category!=='null')&& (req.params.category!=='0')) {
        findJSON.Categorie = req.params.category;
    }
    if (req.params.search && (req.params.search!=='null')) {
        var str = req.params.search;
        var result = str.split("_");
        if(result[0]==='data'){
            findJSON.Id = result[1];
        } else {
        var re = new RegExp(req.params.search, 'i');
        findJSON.$or = [
            {'Auteur': re},
            {'Categorie': re},
            {'Nom': re}
            ];    
        }

    }
    console.log('RecupererLivresRecherche');
    console.log('findJSON');
console.log(findJSON);
models.Livre.find(findJSON).exec(function (err, livres) {
    if (err) {
        return console.error(err);
    }
        res.json(livres);
});
};
exports.RecupererLivreParId = function (req, res) {
    console.log('RecupererLivreParId');

    var options = {Id: req.params.Id};
    models.Livre.findOne(options, function (err, livre) {
        if (err) {
            return console.error(err);
        }

        res.json(livre);
    });
};


exports.RecupererLivresParCategorie = function (req, res) {
    console.log('RecupererLivresParCategorie');
    var options = {Categorie: req.params.categorie};
    console.log(options);
    models.Livre.find(options, function (err, livres) {
        if (err) {
            return console.error(err);
        }

        res.json(livres);
    });
};
//controlleur récupérer livres ar disponibilité
exports.RecupererLivresParDisponibilite = function (req, res) {
    console.log('RecupererLivresParDisponibilite');
    var options = {Disponibilite: req.body.Disponibilite};
    models.Livre.find(options, function (err, livres) {
        if (err) {
            return console.error(err);
        }
        res.json(livres);
    });

};
exports.RecupererCategories = function (req, res) {
    console.log('RecupererCategories');

    models.Categorie.find(function (err, categories) {
        if (err) {
            return console.error(err);
        }

        res.json(categories);
    });
};
exports.RecupererAuteurs = function (req, res) {
    console.log('RecupererAuteur');

    models.Livre.find().distinct('Auteur',function (err, livres) {
        if (err) {
            return console.error(err);
        }

        res.json(livres);
    });
};
exports.RecupererCategParId = function (req, res) {
    console.log('RecupererCategParId');
    var options = {Id: req.body.Id};
    models.Categorie.findOne(options, function (err, categorie) {
        if (err) {
            return console.error(err);
        }

        res.json(categorie);
    });
};

exports.CreerCategorie = function (req, res) {
    console.log('CreerCategorie', req.body);

    models.Categorie(req.body).save();
    res.json(req.body);
};


exports.CreerLivre = function (req, res) {

    console.log('CreerLivre');
    models.Livre(req.body).save();
    res.json(req.body);
};
//function pour les utilisateur crée/authentification/infos membre
exports.CreerUser = function (req, res) {
    if (!req.body.email || !req.body.password) {
        res.json({success: false, msg: 'Please pass name and password.'});
    } else {
        var newUser = new models.User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
};
exports.Authentification = function (req, res) {
    models.User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err)
            throw err;
        if (!user) {
            res.send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.encode(user, config.data.secret);
                    // return the information including token as JSON
                    res.json({success: true, token: 'JWT ' + token, user: user});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
};
exports.InfoMembre = passport.authenticate('jwt', {session: false}), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.data.secret);
        models.User.findOne({
            name: decoded.name
        }, function (err, user) {
            if (err)
                throw err;

            if (!user) {
                return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
            } else {
                res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
            }
        });
    } else {
        return res.status(403).send({success: false, msg: 'No token provided.'});
    }
}
getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
