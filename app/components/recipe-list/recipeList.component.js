"use strict";
const recipeList = {
    templateUrl:"/app/components/recipe-list/recipeList.html",
    controller: ["AppService", function(AppService) {
        const vm = this;
        vm.shown = false;
        vm.error = true;
        vm.$onInit = function() {
            AppService.Get().then(function(dtm){
                vm.result = dtm;

                if (vm.result.data.count == 0) {
                    vm.error = false;
                    console.log(vm.error);
                }
                else {
                    vm.error = true;
                    console.log(vm.error);
                }
            
            });
           
        }

        vm.fave = function(item) {
            AppService.addFave(item);
            //console.log(item)
        }
        vm.show = function(item) {
            vm.focused = item;
            vm.shown = true;
            //console.log(vm.shown);
        }
    }]
};


angular.module("App").component("recipeList", recipeList);