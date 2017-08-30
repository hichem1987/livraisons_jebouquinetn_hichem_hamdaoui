'use strict';
app.factory('LivresService',['API_ENDPOINT','$http','$q', function (API_ENDPOINT,$http, $q) {

    var objLivres = {Livres:[],RecupererLivres:RecupererLivres};

        function RecupererLivres() {
            var def = $q.defer();

            $http.get(API_ENDPOINT.url+"/Livres/")
                    .success(function (data) {
                        objLivres.Livres = data;
                        def.resolve(data);
                    })
                    .error(function () {
                        def.reject("Failed to get albums");
                    });
            return def.promise;
        }
    objLivres.RecupererAuteurs = function () {
        return $http({url: API_ENDPOINT.url+"/Auteurs"});
    };        
    objLivres.RecupererLivresParCateg = function (id) {
        var deferred_data = $q.defer();
        var Livres = {};
        $http({
            method: "GET",
            url: API_ENDPOINT.url+"/Livres/"+id
        }).then(function (data) {
            deferred_data.resolve(data);
        }, function (response) {
            console.log(response.statusText);
        }
        );
        Livres = deferred_data.promise;

        return Livres;
    };
    objLivres.ChercherParId = function (id) {
        var livre = {};
        var deferred_data = $q.defer();
        $http({
            method: "GET",
            url: API_ENDPOINT.url+"/Livre/"+id
        }).then(function (data) {
            deferred_data.resolve(data);
        }, function (response) {
            console.log(response.statusText);
        }
        );
        livre = deferred_data.promise.$$state;

        return livre;
    };
    objLivres.ChercherMultiple = function (formdata) {
        var Livres = {};
        var paramcateg=null;var param_auteur=null;var param_search=null;
        var deferred_data = $q.defer();
         if(typeof(formdata.category) !== "undefined" && formdata.category !== null){
             paramcateg=formdata.category;
         }
         if(typeof(formdata.auteur) !== "undefined" && formdata.auteur !== null){
             param_auteur=formdata.auteur;             
         }
         if(typeof(formdata.search) !== "undefined" && formdata.search !== null){
             param_search=formdata.search;
         }      
        $http({
            method: "GET",
            url: API_ENDPOINT.url+"/LivresAll/"+paramcateg+"/"+param_auteur+"/"+param_search+"/"
        }).then(function (data) {
            deferred_data.resolve(data);
        }, function (response) {
            console.log(response.statusText);
        }
        );
        Livres = deferred_data.promise;

        return Livres;
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
//    objLivres.ChercherLivreDispo = function (disponibilite) {
//        var livres = [];
//        angular.forEach(this.Livres, function (item) {
//            if (item.Disponibilite == disponibilite) {
//                livres.push(item);
//            }
//        });
//        return livres;
//
//    };
    objLivres.ChercherLivreDispo = function (id) {
        var deferred_data = $q.defer();
        var Livres = {};
        $http({
            method: "POST",
            data:{"Disponibilite": id},
            url: API_ENDPOINT.url+"/Livres/"
        }).then(function (data) {
            deferred_data.resolve(data);
        }, function (response) {
            console.log(response.statusText);
        }
        );
        Livres = deferred_data.promise.$$state;

        return Livres;
    };
    return objLivres;
}]);