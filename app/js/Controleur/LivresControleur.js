'use strict';
app.controller('LivresControleur', function ($scope, CategoriesService, LivresService,
        PanierService, $routeParams, API_ENDPOINT) {
    $scope.livres = [];
//    $scope.livres = LivresService.RecupererLivresParCateg($routeParams.Category);
            LivresService.RecupererLivresParCateg($routeParams.Category)
                    .then(function (res) {
                        $scope.livres = res.data;
                    },
                            function () {
                                console.log('albums retrieval failed.');
                            });    
    $scope.categ = CategoriesService.ChercherCategParId($routeParams.Category);
    $scope.img_repo = API_ENDPOINT.image_directory;
    $scope.AjouterLivre = function (item) {
        PanierService.AjouterLivre(item);

    }
//    récupération liste des auteurs
    $scope.promise = LivresService.RecupererAuteurs().success(function (data, status, headers, config) {
        $scope.Auteurs = data;
    }).error(function (data, status, headers, config) {
        console.log("problem mongo");
    }
    );
    $scope.saveData = function () {
        console.log($scope.livre_selected);
    $scope.livres = [];
        var formData = {
        };
        if (typeof ($scope.categorie_choix) !== "undefined" && $scope.categorie_choix !== null) {
            formData.category = $scope.categorie_choix;
        }
        console.log($scope.livre_selected);
        if (typeof ($scope.livre_selected) !== "undefined" && $scope.livre_selected !== null) {
            if ($scope.livre_selected.hasOwnProperty('title')) {
                formData.search="data_"+$scope.livre_selected.originalObject.Id;
            }else {
                formData.search=$scope.livre_selected.originalObject;
            }
//            formData.search = $scope.livre_selected;
        }

        if (typeof ($scope.auteur_choix) !== "undefined" && $scope.auteur_choix !== null) {
            formData.auteur = $scope.auteur_choix;
        }
        console.log('formdata');
        console.log(formData);
//        return false;
//        var jdata = JSON.stringify(formData);
//        console.log(formData.length);
//        console.log("jdata");
//                console.log(jdata.length);
//                console.log(jdata);
//                console.log('taille');
//                console.log(Object.keys(formData).length);
        if (Object.keys(formData).length > 0) {
//            $scope.promise = LivresService.ChercherMultiple(formData).success(function (data, status, headers, config) {
//
//                $scope.Livres = data;
//            }).error(function (data, status, headers, config) {
//                console.log("problem mongo");
//            }
//            );
            LivresService.ChercherMultiple(formData)
                    .then(function (res) {
                        $scope.livres = res.data;
                    },
                            function () {
                                console.log('albums retrieval failed.');
                            });


        } else {

            return false;
        }

    };
});