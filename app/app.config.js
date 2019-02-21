"use strict";
angular.module("App").config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/searchCriteria", 
    {
        template:"<search-criteria></search-criteria>"
    })
    .when("/recipeList", 
    {
        template:"<recipe-list></recipe-list>"
    })
    .when("/favoritesPage", 
    {
        template:"<favorites-page></favorites-page>"
    })
    //landing defaults to our search page
    .otherwise({redirectTo: "/searchCriteria"});
}]);