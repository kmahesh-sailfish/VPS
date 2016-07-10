


(function () {

    "use strict";

    angular.module('app.Login', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('Login', {
                        url: '/Login',
                        views: {
                            'template': {

                                templateUrl: 'Views/Login.html',
                                controller: 'LoginCtrl',
                            },
                           /* 'menu': {
                             templateUrl: 'Views/header.html',
                             controller: 'HeaderCtrl'
                             }*/

                        }
                       /* templateUrl: 'Views/Login.html',
                        controller: 'LoginCtrl'*/
                    })

            }]).
        controller('LoginCtrl',function($state,auth,store,$location,$scope){

                $scope.email = '';
                $scope.password = '';

                $scope.adminsubmit=function()
                {
                    auth.signin(

                        {
                            sso: false,
                            connection: 'Username-Password-Authentication',
                            username:  $scope.email,
                            password:   $scope.password,

                        }, onLoginSuccess,
                        onLoginFailed
                    );

            }
            $scope.clear=function()
            {
                $scope.email="";
                $scope.password="";
            }


            function onLoginSuccess(profile,token) {

                console.log("success");

                store.set('profile', profile);
                store.set('token', token);

                $state.go('UserList');
            }

            function onLoginFailed() {

                console.log('faild');
            }

        })
}());