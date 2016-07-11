

(function () {

    "use strict";

    angular.module('app.UserList', ['ui.grid'])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('UserList', {
                        url: '/UserList',
                        views: {
                            'template': {

                                templateUrl: 'Views/UsersList.html',
                                controller: 'UserListCtrl',
                                data: { requiresLogin: true },
                                authenticate: true
                            },
                            'menu': {
                                templateUrl: 'Views/header.html',
                                controller: 'HeaderCtrl',
                                data: { requiresLogin: true },
                                authenticate: true
                            },
                            params: {
                                ADBID:null
                            }

                        }

                    })

            }]).
        controller('UserListCtrl', function ($state,$stateParams,crudAPIFactory,auth ,$scope,Resource,appSettings) {


            if (auth.isAuthenticated) {
                var ADBID = null;
                LoadUsers();
                $scope.edit=function(getuser){

                    var resource=Resource.GetRestUrl(appSettings.accountsSingleUrl);
                    resource.query(
                        {idUsers: getuser.idUsers},

                        function(data) {

                            $scope.user = {};
                            $scope.user.idUsers=data[0].idUsers;
                            $scope.user.Name = data[0].userName;
                            $scope.user.Lastname  = data[0].userLastname;
                            $scope.user.Address  = data[0].useraddress;
                            $scope.user.Email  = data[0].useremail;
                        },
                        function (error) {      // Error handler code
                            console.log(error);
                        });

                };
                $scope.updateuser=function(getuser){
                    var resource = Resource.GetRestUrl(appSettings.accountsSingleUpdateUrl);


                    var user={
                        Name: $scope.user.Name,
                        Lastname: $scope.user.Lastname,
                        Address: $scope.user.Address,
                        Email: $scope.user.Email
                    }
                    resource.update(
                        {idUsers: getuser.idUsers},
                        user,
                        function(data) {

                            LoadUsers();
                            clear();
                        },
                        function (error) {      // Error handler code
                            console.log(error);
                        }
                    )
                };
                $scope.deleteuser=function(getuser){
                    var resource=Resource.GetRestUrl(appSettings.accountSingleDeleteUrl);

                    resource.delete(
                        {idUsers: getuser.idUsers},
                        function(data) {

                            LoadUsers();
                            clear();

                        },
                        function (error) {      // Error handler code
                            console.log(error);
                        }
                    )
                }
                $scope.Creatuser=function(getuser)
                {
                    var resource=Resource.GetRestUrl(appSettings.accountCreationUrl);
                    var  user={};


                    $scope.user.password='$2a$10$NsN3y42Ar.9ftYVR0JzBMuBx09aozNOkepAYeyptp.2ahL9wN9mbO';
                    resource.save({

                            Name:$scope.user.Name,
                            Lastname:$scope.user.Lastname,
                            Address: $scope.user.Address,
                            Email: $scope.user.Email,
                            password:$scope.user.password
                        },
                        function (data) {

                            LoadUsers();
                            clear();
                        },
                        function (error) {
                            console.log(error);
                        });
                }

            }
            else {


                $state.go('Logout');
            }
            function LoadUsers()
            {
                var  resource   = Resource.GetRestUrl(appSettings.accountsGeneralUrl);

                $scope.users={};
                $scope.gridOptions={};

                resource.query(
                    {Id: ADBID},
                    function(data) {

                        $scope.Users=data;

                    },
                    function (error) {      // Error handler code
                        console.log(error);
                    });
            }

            function clear()
            {
                var user={};
                $scope.user.Name="";
                $scope.user.Lastname="";
                $scope.user.Address="";
                $scope.user.Email="";
                $scope.user.passwor="";
            }

        });
}());