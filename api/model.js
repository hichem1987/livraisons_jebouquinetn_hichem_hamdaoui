var schemas = require('./schema');
var mongoose = require('./db').mongoose;
exports.User = mongoose.model('User', schemas.schemaUser);
exports.Livre = mongoose.model('Livre', schemas.schemaLivre);
exports.Categorie = mongoose.model('Categorie', schemas.schemaCategorie);