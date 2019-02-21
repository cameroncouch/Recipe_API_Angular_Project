"use strict";
const favoritesPage = {
    
    templateUrl:"app/components/favorites-page/favoritesPage.html",
    controller: ["AppService", function(AppService) {
        const vm = this;
        vm.shown = false;
        vm.$onInit = function() {
            vm.faveArray = AppService.getFave();
        }
        vm.delete = function (idx) {
            vm.faveArray[idx].bookmarked = false;
            vm.faveArray.splice(idx, 1);
            AppService.deleteFave(vm.faveArray);
        }

        vm.show = function(item) {
            vm.focused = item;
            vm.shown = true;
        }
        
        vm.setTempFave = function(newArray) {
            vm.faveArray = newArray;
        }
    }]
};


angular.module("App").component("favoritesPage", favoritesPage);