"use strict";
const searchCriteria = {
    templateUrl:"app/components/search-criteria/searchCriteria.html",
    controller: ["AppService", "$location", function(AppService, $location) {
        const vm = this;
        // search funtionality
        vm.search = () => {
             AppService.Search(vm.input, vm.id, vm.idx);

        }
    }]
};


angular.module("App").component("searchCriteria", searchCriteria);