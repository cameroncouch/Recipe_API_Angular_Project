"use strict";
const searchCriteria = {
    templateUrl:"app/components/search-criteria/searchCriteria.html",
    controller: ["AppService", "$location", function(AppService, $location) {
        const vm = this;
        vm.search = function() {
           // console.log(vm.input);
        AppService.Search(vm.input);

            // const results = AppService.Get();

        }
    }]
};


angular.module("App").component("searchCriteria", searchCriteria);