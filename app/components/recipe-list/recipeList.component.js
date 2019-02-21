"use strict";
const recipeList = {
    templateUrl:"/app/components/recipe-list/recipeList.html",
    controller: ["AppService", function(AppService) {
        const vm = this;
        vm.shown = false;
        vm.error = true;
        vm.$onInit = () => {
            AppService.Get().then(function(dtm){
                vm.result = dtm;

                if (vm.result.data.count == 0) {
                    vm.error = false;
                }
                else {
                    vm.error = true;
                }
                console.log(vm.result);
            });
           
        }
        vm.divide = (num) => {
            console.log(num);
            return String(Number(num) / 6);
        }
       
        vm.fave = (item) => {
            if(!item.bookmarked){
                item.bookmarked = true;
                AppService.addFave(item);
            }else{
                item.bookmarked = false;
                AppService.deleteTempFav(item);
            }
        }
        vm.show = (item) => {
            vm.focused = item;
            vm.shown = true;
        }
    }]
};


angular.module("App").component("recipeList", recipeList);