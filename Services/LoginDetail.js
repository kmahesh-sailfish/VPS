/**
 * Created by rubhu on 7/9/2016.
 */

(function()
{
    'use strict';

    angular.module('app',[])
        .factory('userstorage',['$window'
            ,userDetailsFn]);


    function userDetailsFn($window)
    {
        return {

            set: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            get: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            removeObject: function(key)
            {
                $window.localStorage.removeItem(key);
            }
        }
    };
}());