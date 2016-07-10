


(function () {

    "use strict";


    angular.module('app.Logout', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('Logout', {
                        url: '/Logout',
                        templateUrl: 'Views/Logout.html',
                        controller: 'LogoutCtrl'
                    })

            }]).
        controller('LogoutCtrl', function ($state,auth,store) {
console.log("same");
            auth.signout();
            store.remove('profile');
            store.remove('token');
            $state.go('Login');
          /*  $location.path('/login');*/

        });
}());