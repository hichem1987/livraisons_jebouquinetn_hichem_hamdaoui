'use strict';
app.factory('LivresService', function ($http) {
    var objLivres = {};
    objLivres.Livres = [];
    objLivres.RecupererLivres = function () {
        return $http({ url: "app/js/data.livre.js" });
    };
    objLivres.ChercherParId = function (id) {
        var livre = {};
        angular.forEach(this.Livres, function (item) {
            if (item.Id == id) {
                livre = item;
                return item;
            }
        });
        return livre;
    };
    objLivres.ChercherParCategorie = function (categorie) {
        var livres = [];
        angular.forEach(this.Livres, function (item) {
            if (item.Categorie == categorie) {
                livres.push(item);
            }
        });
        return livres;
    };
    objLivres.ChercherLivreDispo = function (disponibilite) {
        var livres = [];
        angular.forEach(this.Livres, function (item) {
            if (item.Disponibilite == disponibilite) {
                livres.push(item);
            }
        });
        return livres;
    
    };    
    return objLivres;
});