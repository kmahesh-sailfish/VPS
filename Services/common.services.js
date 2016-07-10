/**
 * Created by karthik on 01-14-2016.
 */

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


            // Accounts Urls ---------------------------------------------------

          /*  googleAuthUrl: RootUrl()+'auth/google',

            accountsSingleUrl: RootUrl() + "api/accounts/:Id",

            accountsAllUrl: RootUrl() + "api/accounts/All",

            accountsforAssigneUrl: RootUrl() + "api/accounts/listforAssigne",*/
            accountCreationUrl: RootUrl()+"api/users/inseruser",
            accountsGeneralUrl: RootUrl() + "api/users/display",
            accountsSingleUrl: RootUrl() + "api/users/getuserbyid",
            accountsSingleUpdateUrl: RootUrl()+"api/users/updateuser",
            accountSingleDeleteUrl: RootUrl()+"api/users/delete"
           /* accountsActiveUrl: RootUrl() + "api/accounts/Active",

            accountsInActiveUrl: RootUrl() + "api/accounts/InActive",

            accountsInsertUrl: RootUrl() + "api/accounts/Insert",

            accountsUpdateUrl: RootUrl() + "api/accounts/Update",

            accountsFirmsUrl: RootUrl() + "api/accounts/FirmNames",

            accountsCheckActiveEntities: RootUrl() + "api/accounts/CheckActiveEntities",*/

            // End --------------------------------------------------------------

            //cases -----------------











        })

}());