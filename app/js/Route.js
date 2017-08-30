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
                    .when('/Panier', {
                        templateUrl: "app/html/Panier.html",
                        controller: 'PanierControleur'
                    })
//                    .when('/logout', {
//                        title: 'Logout',
//                        templateUrl: 'partials/login.html',
//                        controller: 'logoutCtrl'
//                    })
                    .otherwise({
                        redirectTo: '/Accueil'
                    });
        }
)
//.run(function ($rootScope, $location, Data) {
//    $rootScope.$on("$routeChangeStart", function (event, next, current) {
//        $rootScope.authenticated = false;
//        Data.get('session').then(function (results) {
//            if (results.uid) {
//                $rootScope.name = results.name;
//                $rootScope.email = results.email;
//            } else {
//                var nextUrl = next.$$route.originalPath;
//                if (nextUrl == '/Authentification')  {
//
//                } else {
//                    $location.path("/Authentification");
//                }
//            }
//        });
//    });
//});
        ;
