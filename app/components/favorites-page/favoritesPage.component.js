"use strict";
const favoritesPage = {
    
    templateUrl:"app/components/favorites-page/favoritesPage.html",
    controller: ["AppService", function(AppService) {
        const vm = this;

        vm.$onInit = function() {
            console.log("hi yall")
            vm.faveArray = AppService.getFave();
            console.log(vm.faveArray)
        }

        vm.delete = function (idx) {
            vm.faveArray.splice(idx, 1);
            AppService.deleteFave(vm.faveArray);
        }
    }]
};


angular.module("App").component("favoritesPage", favoritesPage);