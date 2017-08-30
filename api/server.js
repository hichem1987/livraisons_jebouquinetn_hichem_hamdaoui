var express = require('express');
var models = require('./model.js');
require('./fixtures');
var app = express();

var passport = require('passport');
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());
app.use(morgan('dev'));

var jwt = require('jwt-simple');
// Use the passport package in our application
app.use(passport.initialize());

var controller = require('./controller');
var port = 8780;
app.get('/Livres', controller.RecupererLivres);
app.get('/Livres/search=:search', controller.RecupererLivresRecherche);
//recherche multiple argument
app.get('/LivresAll/:category/:auteur/:search/', controller.RecupererLivresMultiple);
app.get('/Livres/:categorie', controller.RecupererLivresParCategorie);
app.get('/Livre/:Id', controller.RecupererLivreParId);
//web service récupérer livre par disponibilité
app.post('/Livres/', controller.RecupererLivresParDisponibilite);

app.get('/Categories', controller.RecupererCategories);
app.post('/Categorie/', controller.RecupererCategParId);
app.post('/Categorie/Creer', controller.CreerCategorie);
app.post('/Livre/Creer', controller.CreerLivre);
//web service récupérer auteur
app.get('/Auteurs', controller.RecupererAuteurs);
app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});
//user web service
app.post('/signup', controller.CreerUser);
app.post('/authenticate', controller.Authentification);
app.get('/memberinfo',controller.InfoMembre);

//fin web service user 
// Start the server
app.listen(port);
