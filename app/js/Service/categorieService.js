/* 
 * the author of the project
 * Hichem Hamdaoui
 * Email:hamdaoui.hichem@gmail.com
 */
'use strict';
app.factory('CategoriesService',['API_ENDPOINT','$http','$q', function (API_ENDPOINT,$http, $q) {
    var objCategories = {};
    objCategories.categories = [];
    objCategories.RecupererCategories = function () {
        return $http({url: API_ENDPOINT.url+"/categories"});
    };

    objCategories.ChercherCategParId = function (id) {
        var deferred = $q.defer();
        var Categ = {};
        $http({
            data: {"Id": id},
            method: "POST",
            url: API_ENDPOINT.url+"/Categorie"
        }).then(function (data) {
            deferred.resolve(data);


        }, function (response) {
            Categ = response.statusText;
            console.log(response.statusText);
        });
        Categ = deferred.promise.$$state;
        return Categ;
    };
    return objCategories;
}]);

