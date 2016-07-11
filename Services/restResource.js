
(function() {
    "use strict";

    angular
        .module("common.services")
        .factory("Resource", ["$resource","auth","$state","store",resourceFn]);


    function resourceFn($resource,auth,$state,store)
    {

        var ResourceUrl = {};


        ResourceUrl.GetRestUrl = function(url) {

            var tokenval = null;

            tokenval = store.get('token');


            return $resource(
                url,
                    {   Id: '@Id',
                        Id1:'@Id1',
                        Id2:'@Id2',
                        Id3:'@Id3',
                        idUsers:'@idUsers'
                },
                {
                    'save':{method:'POST',



                        headers: {Authorization :'Bearer '+tokenval,
                        } ,
                        transformResponse: function(data,headersGetter) {

                            if(data == "1oq00t")
                            {
                                $state.go('Logout');
                            }
                            else
                            {

                                if(headersGetter().authorization != null)
                                {
                                    auth.setToken(headersGetter().authorization);

                                }

                                return  IsJsonString(data);
                            }
                        }
                    },
                    'query': {
                            method: 'GET',
                        headers: {Authorization :'Bearer '+tokenval,
                        },
                        transformResponse: function(data,headersGetter) {

                            if(data == "1oq00t")
                            {


                                $state.go('Logout');
                            }
                            else
                            {

                                if(headersGetter().authorization != null)
                                {
                                    auth.setToken(headersGetter().authorization);

                                }

                                return  IsJsonString(data); // JSON.parse(data);
                            }
                        },
                        isArray: true

                    },
                    'update': {method: 'PUT',
                        headers: {
                            Authorization :'Bearer '+tokenval,
                        },
                        transformResponse: function(data,headersGetter) {

                            if(data == "1oq00t")
                            {
                                $state.go('Logout');
                            }
                            else
                            {

                                if(headersGetter().authorization != null)
                                {
                                    auth.setToken(headersGetter().authorization);

                                }
                                return  IsJsonString(data);
                            }
                        }
                    },
                    'remove': { method:'DELETE',
                        headers: {Authorization :'Bearer '+tokenval,
                        },
                        transformResponse: function(data,headersGetter) {

                            if(data == "1oq00t")
                            {
                                $state.go('Logout');
                            }
                            else
                            {

                                if(headersGetter().authorization != null)
                                {
                                    auth.setToken(headersGetter().authorization);

                                }

                                return  IsJsonString(data);
                            }
                        }
                    },
                    'delete': {
                        method:'DELETE',
                        headers: {Authorization :'Bearer '+tokenval,
                        } ,
                        transformResponse: function(data,headersGetter) {

                            if(data == "1oq00t")
                            {
                                $state.go('Logout');
                            }
                            else
                            {
                                if(headersGetter().authorization != null)
                                {
                                    auth.setToken(headersGetter().authorization);
                                }

                                return  IsJsonString(data);
                            }
                        }
                    }
                }
            );
        };
        return ResourceUrl;
    }
    function IsJsonString(data) {
        try {
            return  JSON.parse(data);
        } catch (e) {
            return data;
        }

    }
}());
