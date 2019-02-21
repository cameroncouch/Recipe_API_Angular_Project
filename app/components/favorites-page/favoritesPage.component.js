"use strict";
const favoritesPage = {
    
    templateUrl:"app/components/favorites-page/favoritesPage.html",
    controller: ["AppService", function(AppService) {
        const vm = this;
        vm.shown = false;
        vm.$onInit = () => {
            vm.faveArray = AppService.getFave();
        }
        vm.delete = (idx) => {
            vm.faveArray[idx].bookmarked = false;
            vm.faveArray.splice(idx, 1);
            AppService.deleteFave(vm.faveArray);
        }

        vm.show = (item) => {
            vm.focused = item;
            vm.shown = true;
        }
        
        vm.setTempFave = (newArray) => {
            vm.faveArray = newArray;
        }
        vm.divide = (num) => {
            console.log(num);
            return String(Number(num) / 6);
        }
    }]
};


angular.module("App").component("favoritesPage", favoritesPage);