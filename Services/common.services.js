
(function () {

    "use strict";

    var RootUrl = function () {
        return "https://userliserver.herokuapp.com/"
       /* return "http://localhost:4000/";
*/
    };

    angular
        .module("common.services", ["ngResource"])

        .constant("appSettings", {

            accountCreationUrl: RootUrl()+"api/users/inseruser",
            accountsGeneralUrl: RootUrl() + "api/users/display",
            accountsSingleUrl: RootUrl() + "api/users/getuserbyid",
            accountsSingleUpdateUrl: RootUrl()+"api/users/updateuser",
            accountSingleDeleteUrl: RootUrl()+"api/users/delete"


        })

}());