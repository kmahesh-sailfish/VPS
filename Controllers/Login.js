


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


                        }

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
                $scope.message="";
            }


            function onLoginSuccess(profile,token) {

                store.set('profile', profile);
                store.set('token', token);

                $state.go('UserList');



            }

            function onLoginFailed() {
                $scope.message="Login Faild"

            }
            $scope.message="";
        })
}());