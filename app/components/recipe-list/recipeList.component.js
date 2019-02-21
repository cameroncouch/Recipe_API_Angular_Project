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
                }
                else {
                    vm.error = true;
                }
            
            });
           
        }
        // vm.faveClass = function(item) {
        //     for(let i = 0; i < AppService.faveArray.length; i++) {
        //         if (item == AppService.faveArray[i]) {
        //             console.log(item);
        //             console.log(AppService.faveArray[i])
        //             return true;
        //         }
        //     }
        //     return false;
        // }
        vm.fave = function(item) {
            if(!item.bookmarked){
                item.bookmarked = true;
                AppService.addFave(item);
            }else{
                item.bookmarked = false;
                AppService.deleteTempFav(item);
            }
        }
        vm.show = function(item) {
            vm.focused = item;
            vm.shown = true;
        }
        vm.listItems = function(itemList){
            vm.List = "";
            for(let i = 0; i < itemList.length -1; i++){
                vm.List = vm.List + "• " + itemList[i] + "\n";
            }
            return vm.List;
        }
    }]
};


angular.module("App").component("recipeList", recipeList);