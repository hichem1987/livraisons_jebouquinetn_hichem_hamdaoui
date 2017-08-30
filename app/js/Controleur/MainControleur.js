'use strict';

app
        .controller('mainControleur',
                function ($scope, $q, $log, $location, $sessionStorage, API_ENDPOINT,
                        CategoriesService, PanierService, LivresService, UserService) {
                    $sessionStorage.Panier = PanierService.Panier;
                    $scope.Panier = $sessionStorage.Panier;
                    $sessionStorage.User = UserService.User;
                    $scope.saveData = function () {
                        $location.url('/Detail/'+$scope.livre_selected.originalObject.Id);
                    };
                    if (($sessionStorage.User !== undefined) && ($sessionStorage.User.length >= 0)) {
                        $scope.User = JSON.parse($sessionStorage.User);
                    }
                    $scope.EstPanierVide = true;
                    $scope.Livres = [];
                    $scope.img_repo = API_ENDPOINT.image_directory;
                    $scope.url_livre_search = API_ENDPOINT.url + "/Livres/search=";
                    $scope.Livres = LivresService.ChercherLivreDispo('exclusif');
                    $scope.promise = CategoriesService.RecupererCategories().success(function (data, status, headers, config) {
                        $scope.Categories = data;
                    }).error(function (data, status, headers, config) {
                        console.log("problem mongo");
                    }
                    );
                    $scope.AjouterLivre = function (item) {
                        console.log(item);
                        PanierService.AjouterLivre(item);

                    }

                    $scope.NombresLivres = function () {
                        var total = 0;
                        var estPanierVide = true;

                        angular.forEach(PanierService.Panier, function (item) {
                            total += item.Quantite;
                            $scope.EstPanierVide = false;
                        });
                        return total;
                    }

                    $scope.CalculerMontantTotal = function () {
                        var montantTotal = 0;
                        angular.forEach(PanierService.Panier, function (item) {
                            montantTotal += (item.Quantite * item.Prix);
                            $scope.EstPanierVide = false;
                        });
                        montantTotal = parseFloat(Math.round(montantTotal * 100) / 100).toFixed(3);
                        return montantTotal;
                    }

                    $scope.SupprimerLivre = function (item) {
                        PanierService.SupprimerLivre(item);
                    };


                });