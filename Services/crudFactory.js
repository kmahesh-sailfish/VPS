/**
 * Created by rubhu on 6/14/2016.
 */
angular.module('app.crudFactory', [])
    .factory('crudAPIFactory', function($http) {

        var crudFactory={};
       /* crudFactory.getuserList = function () {

            return $http({
                url: "https://userliserver.herokuapp.com/users/display",
                method: 'GET'
            });

        };*/
        crudFactory.createuser=function(user){

            return $http({
                url: "https://userliserver.herokuapp.com/users/inseruser",
                method: 'POST',
                data:user
            });
        }
        crudFactory.updateUser = function (user) {
        console.log('update');
            console.log(user);
            console.log(user.idUsers);
            return $http({
                url:"https://userliserver.herokuapp.com/users/updateuser?idUsers="+user.idUsers,
               /* url: "https://userliserver.herokuapp.com/users/updateuser?idUsers="+ user.idUsers,*/
                method: 'PUT',
                data:user

            });
        };
        crudFactory.getuserdetails = function (user) {
console.log(user);
            return  $http({
                url: " https://userliserver.herokuapp.com/users/getuserbyid?idUsers=" + user.idUsers,

                method: 'GET'

            });
        };


        return crudFactory
    })