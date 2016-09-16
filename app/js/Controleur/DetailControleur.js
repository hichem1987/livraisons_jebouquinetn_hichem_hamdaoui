'use strict';
app.controller('DetailControleur',
        function ($scope, $routeParams,API_ENDPOINT, LivresService, PanierService) {
            $scope.img_repo = API_ENDPOINT.image_directory;
            $scope.Livre = LivresService.ChercherParId($routeParams.Id);
            $scope.AjouterLivre = function (item) {
                PanierService.AjouterLivre(item);
            }
        });