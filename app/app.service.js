"use strict";
function AppService($location, $http) {
    const self = this;
    const key = "4d7a3e8fb6166e54fb00f65b193aa1aa";
    const appID = "c471afec";    
    const healthSearch = ["vegan", "alcohol-free", "peanut-free", "sugar-conscious"] // array for the health filter option
    const dietSearch = ["balanced","high-protein", "low-carb", "low-fat"] //array for the diet filter options
    self.faveArray = []; //array where foods that are faved are pushed
    self.Search = function(input, id, idx)  {

        self.health = (id ? "&health=" + healthSearch[Number(id)] : "" ); //If-else statement that governs empty filter options
        self.diet   = (idx ? "&diet="  +  dietSearch[Number(idx)] : "" );
        //search function
        $location.path("/recipeList");
        self.data =  $http.get("https://api.edamam.com/search?q="+input+"&app_id="+appID+"&app_key="+key+self.health+self.diet); 
        
        }
        
        self.Get = function(){
            return self.data;
            //if (vm.result.$$state.value.data.count == 0 ) {
                //         vm.error = true;
                //     }
                //     else {
                //         vm.error = false;
                //     }
        }

        self.addFave = function(item) {

            for(let i = 0; i < self.faveArray.length; i++){
                if(item == self.faveArray[i]){
                    return;
                }
            }

            self.faveArray.push(item)
            console.log(self.faveArray)

        }

        self.getFave = function () {
            return self.faveArray;
        }

        self.deleteFave = function (newArray) {
            self.faveArray = newArray;
        }
    }

angular.module("App").service("AppService", AppService);


//working code for search before .then added
// $location.path("/recipeList");
// self.data =  $http.get("https://api.edamam.com/search?q="+input+"&app_id="+appID+"&app_key="+key+self.health+self.diet); 