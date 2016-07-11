
(function()
{
  'use strict'

  angular.module('app.HC',[])
      .config(['$stateProvider',
          function($stateProvider)
          {
              $stateProvider
                  .state('Logout', {
                      url: '/Logout',
                      views: {
                          'template': {
                              templateUrl: 'Views/Logout.html',
                              controller: 'LogoutCtrl'
                          },

                      },

                  })

          }])
      .controller('HeaderCtrl',['$scope','auth','$state','store',headerFn]);


  function headerFn($scope,auth,$state,store)
  {


      $scope.isAuthenticated = function(){
          return auth.isAuthenticated;
      }

     if(auth.isAuthenticated)
     {


         var decodedToken = null;

             decodedToken =  store.get('token');


          if(typeof decodedToken  != 'undefined' && decodedToken != null)
          {



            var userDetails = store.get('profile');




              $scope.headvalues = userDetails.sid;

              $scope.userName = userDetails.uname;

              $scope.daccountid = userDetails.aid;



          }
          else
          {
              $state.go('Logout');
          }
     }
      else
     {
            $state.go('Logout');
     }

      $scope.Logout = function() {

          auth.signout();
          store.remove('profile');
          store.remove('token');
          $state.go('Logout');
      };

  };
}());
