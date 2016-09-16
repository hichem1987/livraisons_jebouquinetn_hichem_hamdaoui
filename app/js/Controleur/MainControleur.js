'use strict';

app
        .controller('mainControleur',
                function ($scope, $rootScope, $sessionStorage, PanierService, LivresService) {
                    $sessionStorage.Panier = PanierService.Panier;
                    $scope.Panier = $sessionStorage.Panier;
                    $scope.EstPanierVide = true;
                    $scope.Livres = [];
                    $scope.promise = LivresService.RecupererLivres().success(function (data, status, headers, config) {
                        $scope.Livres = data;
                        LivresService.Livres = $scope.Livres;
                        $scope.Livres = LivresService.ChercherLivreDispo('exclusif');
                    }).error(function (data, status, headers, config) {

                    }
                    );
                    $scope.AjouterLivre = function (item) {
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
                        var montatTotal = 0;
                        angular.forEach(PanierService.Panier, function (item) {
                            montatTotal += (item.Quantite * item.Prix);
                            $scope.EstPanierVide = false;
                        });

                        return montatTotal;
                    }

                    $scope.SupprimerLivre = function (item) {
                        PanierService.SupprimerLivre(item);
                    }
                });