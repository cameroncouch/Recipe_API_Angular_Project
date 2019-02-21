"use strict";
const recipeList = {
    templateUrl:"/app/components/recipe-list/recipeList.html",
    controller: ["AppService", "$location", function(AppService, $location) {
        const vm = this;
        // these variables are used in hide/show functionality
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

            });
        }
        //takes the returned value of the calorie property, and divides by 6 for an estimated serving size cal count
        vm.divide = (num) => {
            return String(Number(num) / 6);
        }
       //takes the given property bookmarked, and utilizes it for a styling state when an item exists in our fave array
        vm.fave = (item) => {
            if  (!item.bookmarked)  {
                item.bookmarked = true;
                AppService.addFave(item);
            }
            else    {
                item.bookmarked = false;
                AppService.deleteTempFav(item);
            }
        }
        //uses ng-show within the template to display the target information + more, within a separate modul "on top" of the other results
        vm.show = (item) => {
                vm.focused = item;
                vm.shown = true;
        }

        vm.loadMore = () => {
            AppService.loadMore();
            vm.$onInit();
        }

    }]
};


angular.module("App").component("recipeList", recipeList);