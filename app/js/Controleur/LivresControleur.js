'use strict';
app.controller('LivresControleur', function ($scope, LivresService, PanierService, $routeParams) {
    $scope.Livres = [];
    $scope.promise = LivresService.RecupererLivres().success(function (data, status, headers, config) {
        $scope.Livres = data; LivresService.Livres = $scope.Livres;
        if ($routeParams.Category != null)
            $scope.Livres = LivresService.ChercherParCategorie($routeParams.Category);
    }).error(function (data, status, headers, config){
        
        }
    );
    $scope.AjouterLivre = function (item) {
        PanierService.AjouterLivre(item);
       
    }
});