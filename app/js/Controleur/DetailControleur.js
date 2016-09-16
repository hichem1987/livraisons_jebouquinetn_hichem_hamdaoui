'use strict';
app.controller('DetailControleur',
function ($scope, $routeParams, LivresService, PanierService) {
    if (LivresService.Livres != null) {
        $scope.promise = LivresService.RecupererLivres()
        .success(function (data, status, headers, config) {
            $scope.Livres = data;
            LivresService.Livres = $scope.Livres;
            $scope.Livre = LivresService.ChercherParId($routeParams.Id);
        }).error(function (data, status, headers, config) {
        });
    }
    $scope.AjouterLivre = function (item) {
        PanierService.AjouterLivre(item);
    }
});