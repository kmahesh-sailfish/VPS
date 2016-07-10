

(function()
{

    "use strict"


 var app=angular.module('app',['ui.router','app.Login','app.Logout','app.UserList','auth0','angular-jwt','angular-storage','app.crudFactory','app.HC',
 'common.services'])
      app.config(['$stateProvider','$urlRouterProvider','authProvider','$httpProvider','$locationProvider','jwtInterceptorProvider',
            function($stateProvider,$urlRouterProvider,authProvider,$httpProvider,$locationProvider,jwtInterceptorProvider)
            {

                $urlRouterProvider.otherwise('/index');

                $stateProvider.state('index',{
                     url:'/Index',
                     templateUrl:'Index.html',

                })
                    /*.state('userlist',{
                        url:'/Userlist',
                        templateUrl:'Views/UsersList.html',
                        controller:'UsersListCtrl'
                    })*/
                authProvider.init({
                    domain: 'mahesh12.auth0.com',
                    clientID: 'tT8knUJcg3m2amqT0FEaHBkbjFKCEOEI',
                    loginState: '/login'
                });
                authProvider.on('loginSuccess',['$location','profilePromise','idToken','store','$rootScope',function($location, profilePromise, idToken, store, $rootScope){
                    profilePromise.then(function(profile){
                        // profile

                        $rootScope.redirectModeProfile = profile
                    });
                    $location.url('/');
                }])
                jwtInterceptorProvider.tokenGetter = function(store) {

                    return store.get('token');
                };
                $httpProvider.interceptors.push('jwtInterceptor');
            }]).run(function($rootScope, auth, store, jwtHelper, $state) {
            $rootScope.$on('$locationChangeStart', function() {
                if (!auth.isAuthenticated) {
                    var token = store.get('token');
                    if (token) {
                        if (!jwtHelper.isTokenExpired(token)) {
                            auth.authenticate(store.get('profile'), token);
                        } else {
                            $state.go('Login');
                        }
                    }
                }

            });

        });




}());