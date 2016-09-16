'use strict';
//app.service('AuthService', function ($q, $http, API_ENDPOINT) {
//    var LOCAL_TOKEN_KEY = 'yourTokenKey';
//    var isAuthenticated = false;
//    var authToken;
//
//    function loadUserCredentials() {
//        var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
//        if (token) {
//            useCredentials(token);
//        }
//    }
//
//    function storeUserCredentials(token) {
//        window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
//        useCredentials(token);
//    }
//
//    function useCredentials(token) {
//        isAuthenticated = true;
//        authToken = token;
//
//        // Set the token as header for your requests!
//        $http.defaults.headers.common.Authorization = authToken;
//    }
//
//    function destroyUserCredentials() {
//        authToken = undefined;
//        isAuthenticated = false;
//        $http.defaults.headers.common.Authorization = undefined;
//        window.localStorage.removeItem(LOCAL_TOKEN_KEY);
//    }
//
//    var register = function (user) {
//        return $q(function (resolve, reject) {
//            $http.post(API_ENDPOINT.url + '/signup', user).then(function (result) {
//                if (result.data.success) {
//                    resolve(result.data.msg);
//                } else {
//                    reject(result.data.msg);
//                }
//            });
//        });
//    };
//
//    var login = function (user) {
//        return $q(function (resolve, reject) {
//            $http.post(API_ENDPOINT.url + '/authenticate', user).then(function (result) {
//                if (result.data.success) {
//                    storeUserCredentials(result.data.token);
//                    resolve(result.data.msg);
//                } else {
//                    reject(result.data.msg);
//                }
//            });
//        });
//    };
//
//    var logout = function () {
//        destroyUserCredentials();
//    };
//
//    loadUserCredentials();
//
//    return {
//        login: login,
//        register: register,
//        logout: logout,
//        isAuthenticated: function () {
//            return isAuthenticated;
//        },
//    };
//})
//
//        .factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
//            return {
//                responseError: function (response) {
//                    $rootScope.$broadcast({
//                        401: AUTH_EVENTS.notAuthenticated,
//                    }[response.status], response);
//                    return $q.reject(response);
//                }
//            };
//        })
//
//        .config(function ($httpProvider) {
//            $httpProvider.interceptors.push('AuthInterceptor');
//        });
app.factory("UserService", ['$http', '$q', 'API_ENDPOINT', '$sessionStorage', 'toaster',
    function ($http, $q, API_ENDPOINT, $sessionStorage, toaster) { // This service connects to our REST API
        var obj = {};
        if ($sessionStorage.User === undefined) {
            this.User = {};
            $sessionStorage.User ={};
        } else if ($sessionStorage.User.length > 0) {

            this.User = $sessionStorage.User;
        }

//
//        var serviceBase = 'api/v1/';


        this.toast = function (data) {
            toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
        }
        this.get = function (q) {
            return $http.get(API_ENDPOINT + q).then(function (results) {
                return results.data;
            });
        };
        this.post = function (q, object) {
            return $http.post(API_ENDPOINT + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(API_ENDPOINT + q, object).then(function (results) {
                return results.data;
            });
        };
        this.delete = function (q) {
            return $http.delete(API_ENDPOINT + q).then(function (results) {
                return results.data;
            });
        };
        this.register = function (user) {
            return $q(function (resolve, reject) {
                $http.post(API_ENDPOINT.url + '/signup', user).then(function (result) {
                    if (result.data.success) {
                        resolve(result.data.msg);
                    } else {
                        reject(result.data.msg);
                    }
                });
            });
        };
        this.login = function (user) {
            return $q(function (resolve, reject) {
                $http.post(API_ENDPOINT.url + '/authenticate', user).then(function (result) {
                    if (result.data.success) {
                        resolve(result.data.msg);
                        $sessionStorage.User = JSON.stringify(result.data.user);
                    } else {
                        reject(result.data.msg);
                    }
                });
            });
            this.User=$sessionStorage.User;
        };
        return this;
    }]);