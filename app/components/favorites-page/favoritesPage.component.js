"use strict";
const favoritesPage = {
    
    templateUrl:"app/components/favorites-page/favoritesPage.html",
    controller: ["AppService", function(AppService) {
        const vm = this;
        vm.shown = false;
        vm.$onInit = function() {
            console.log("hi yall")
            vm.faveArray = AppService.getFave();
            console.log(vm.faveArray)
        }

        vm.delete = function (idx) {
            vm.faveArray.splice(idx, 1);
            AppService.deleteFave(vm.faveArray);
        }
        vm.show = function(item) {
            vm.focused = item;
            vm.shown = true;
            console.log(vm.shown);
        }
    }]
};


angular.module("App").component("favoritesPage", favoritesPage);