"use strict";
const recipeList = {
    templateUrl:"/app/components/recipe-list/recipeList.html",
    controller: ["AppService", function(AppService) {
        const vm = this;

        vm.$onInit = function(){
        console.log("cdsyhetsh");
            vm.result = AppService.Get();
            //console.log(vm.result);
        }

    }]
};


angular.module("App").component("recipeList", recipeList);