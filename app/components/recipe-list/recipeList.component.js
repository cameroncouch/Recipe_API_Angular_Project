"use strict";
const recipeList = {
    templateUrl:"/app/components/recipe-list/recipeList.html",
    controller: ["AppService", function(AppService) {
        const vm = this;

        vm.$onInit = function() {
            vm.result = AppService.Get();
        }

        vm.fave = function(item) {
            AppService.addFave(item);
            console.log(item)
        }

    }]
};


angular.module("App").component("recipeList", recipeList);