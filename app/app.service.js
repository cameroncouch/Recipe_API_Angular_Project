"use strict";
function AppService($location, $http) {
    const self = this;
    const key = "4d7a3e8fb6166e54fb00f65b193aa1aa";
    const appID = "c471afec";    
    const healthSearch = ["vegan", "alcohol-free", "peanut-free", "sugar-conscious"] // array for the health filter option
    const dietSearch = ["balanced","high-protein", "low-carb", "low-fat"] //array for the diet filter options
    self.faveArray = []; //array where foods that are faved are pushed
    self.loadCount = 12;
    self.Search = function(input, id, idx) {

        self.health = (id ? "&health=" + healthSearch[Number(id)] : "" ); //If-else statement that governs empty filter options
        self.diet   = (idx ? "&diet="  +  dietSearch[Number(idx)] : "" );
        //search function and http req.
        $location.path("/recipeList");
        self.data =  $http.get("https://api.edamam.com/search?q="+input+"&from=0&to="+self.loadCount+"&app_id="+appID+"&app_key="+key+self.health+self.diet);

    }
        //returns our promise, that is stored in the variable
        self.Get = () => {
            return self.data;
        }
        //this checks to see if an item exists in our faveArray, prior to pushing it - pushes one of each item
        self.addFave = (item) => {
            for(let i = 0; i < self.faveArray.length; i++){
                if(item == self.faveArray[i]){
                    return;                }
            }
            self.faveArray.push(item)
        }

        //returns fave array
        self.getFave = () => {
            return self.faveArray;
        }
        //deletes an item from fave array
        self.deleteFave = (newArray) => {
            self.faveArray = newArray;
        }
        //allows user to delete from array while navigating the initial search results by on/off click of favorite icon
        self.deleteTempFav = (item) => {
            for(let i = 0; i < self.faveArray.length; i++){
                if(item == self.faveArray[i]){
                    self.faveArray.splice(i, 1);
                }
            }
        }

        self.loadMore = () => {
            self.loadCount = self.loadCount + 4;
            console.log(self.loadCount);
            self.Search();
        }

        self.resetCount = (num) => {
            self.loadCount = num;
        }

    }

angular.module("App").service("AppService", AppService);
