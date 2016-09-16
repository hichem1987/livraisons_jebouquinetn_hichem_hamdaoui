/* 
 * the author of the project
 * Hichem Hamdaoui
 * Email:hamdaoui.hichem@gmail.com
 */
'use strict';
app.controller('PanierControleur',
        function ($scope, $sessionStorage, API_ENDPOINT, PanierService, UserService) {
            $scope.img_repo = API_ENDPOINT.image_directory;
            $sessionStorage.Panier = PanierService.Panier;
            $scope.Panier = $sessionStorage.Panier;
            $sessionStorage.User = UserService.User;
            if (($sessionStorage.User !== undefined) && ($sessionStorage.User.length >= 0)) {
                $scope.User = JSON.parse($sessionStorage.User);
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
            }
        });

