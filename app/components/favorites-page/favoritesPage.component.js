"use strict";
const favoritesPage = {
    
    templateUrl:"app/components/favorites-page/favoritesPage.html",
    controller: ["AppService", function(AppService) {
        const vm = this;
        vm.shown = false;
        vm.$onInit = () => {
            vm.faveArray = AppService.getFave();
        }
        // delete from faveArray
        vm.delete = (idx) => {
            //vm.faveArray[idx].bookmarked = false;
            //vm.faveArray.splice(idx, 1);
            //AppService.deleteFave(vm.faveArray);
            AppService.deleteTempFav(idx);
            vm.faveArray = AppService.getFave();
        }
        // pop up behavior within faveArray
        vm.show = (item) => {
            vm.focused = item;
            vm.shown = true;
        }
        // behavior for faving from search-details template
        vm.setTempFave = (newArray) => {
            vm.faveArray = newArray;
        }
        //takes the returned value of the calorie property, and divides by 6 for an estimated serving size cal count
        vm.divide = (num) => {
            console.log(num);
            return String(Number(num) / 6);
        }

        vm.ctrlLength = (str) => {
            if(str.length >= 60){
                str = str.slice(0, 60);
                str = str + "...";
            }
            return str;
        }

    }]
};


angular.module("App").component("favoritesPage", favoritesPage);