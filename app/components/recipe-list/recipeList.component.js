"use strict";
const recipeList = {
    templateUrl:"/app/components/recipe-list/recipeList.html",
    controller: ["AppService", function(AppService) {
        const vm = this;
        vm.shown = false;
        vm.$onInit = function() {
            vm.result = AppService.Get();
        }

        vm.fave = function(item) {
            AppService.addFave(item);
            console.log(item)
        }
        vm.show = function(item) {
            vm.focused = item;
            vm.shown = true;
            console.log(vm.shown);
        }
    }]
};


angular.module("App").component("recipeList", recipeList);