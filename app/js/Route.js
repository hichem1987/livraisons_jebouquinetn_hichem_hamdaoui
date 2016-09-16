'use strict';

app.config(
function ($routeProvider) {
    $routeProvider
    .when('/Accueil', {
        templateUrl: "app/html/Accueil.html",
        controller: 'AccueilControleur'
    })
    .when('/authentification', {
        templateUrl: "app/html/Authentification.html",
        controller: 'CompteControleur'
    })
    .when('/BesoinAide', {
        templateUrl: "app/html/BesoinAide.html",
        controller: 'BesoinAideControleur'
    })
    .when('/Contact', {
        templateUrl: "app/html/Contact.html",
        controller: 'ContactControleur'
    })
    .when('/Detail/:Id', {
        templateUrl: "app/html/Detail.html",
        controller: 'DetailControleur'
    })
    .when('/LesLivres/:Category?', {
        templateUrl: "app/html/Livres.html",
        controller: 'LivresControleur'
    })
    .otherwise({
        redirectTo: '/Accueil'
    });
}
);
