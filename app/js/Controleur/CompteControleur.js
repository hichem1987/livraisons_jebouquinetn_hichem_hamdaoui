app.controller('CompteControleur', function ($scope, $rootScope, $routeParams, $location, $http, UserService) {
    //initially set those objects to null to avoid undefined error
//    $scope.login = {};
//    $scope.signup = {};
//    $scope.doLogin = function (customer) {
//        UserService.post('login', {
//            
//        }).then(function (results) {
//            UserService.toast(results);
//            if (results.status == "success") {
//                $location.path('dashboard');
//            }
//        });
//    };
//    $scope.signup = {email:'',password:'',name:''
////        ,phone:'',address:''
//    };
//    $scope.signUp = function (user) {
//        UserService.post('register', {
//            user: user
//        }).then(function (results) {
//            UserService.toast(results);
//            if (results.status == "success") {
//                $location.path('dashboard');
//            }
//        });
//    };
    $scope.signup = function () {
        UserService.register($scope.user).then(function (msg) {
            $location.path('html/Accueil');
            alert('connected');
        }, function (errMsg) {
            alert('not connected connected');
        });
    };
  $scope.login = function(user) {
    UserService.login(user).then(function(msg) {
      
    }, function(errMsg) {
        alert('connection failed');
      });
    };

    $scope.logout = function () {
        UserService.get('logout').then(function (results) {
            UserService.toast(results);
            $location.path('login');
        });
    }
});