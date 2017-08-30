var mongoose = require('./db.js').mongoose;
var bcrypt = require('bcryptjs');
exports.schemaLivre = new mongoose.Schema({
Id : Number,
Nom: { type: String, maxlength: 50 },
Auteur: String,
Description: String,
Langue: String,
Prix: Number,
ISBN: String,
MaisonEdition: String,
NombrePages: Number,
Poids: String,
Disponibilite: String,
DateSortie:String,
UrlImage: String,
Categorie: String,
Quantite: Number,
DateDerniereCommande: { type: Date, default: Date.now }
}
);
exports.schemaCategorie = new mongoose.Schema({
Id : String,
Libelle: String,
}
);
exports.schemaUser = new mongoose.Schema({
  name: {
        type: String,
        unique: true,
        required: true
    },
  email: {
        type: String,
        unique: true,
        required: true
    },    
  password: {
        type: String,
        required: true
    }
}
);
exports.schemaUser.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});
 
exports.schemaUser.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};