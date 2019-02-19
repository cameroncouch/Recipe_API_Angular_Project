"use strict";
function AppService($location, $http) {
    const self = this;
    const key = "4d7a3e8fb6166e54fb00f65b193aa1aa";
    const appID = "c471afec";
    self.faveArray = [];
    self.Search = function(input)  {
        //console.log(input)
        $location.path("/recipeList");
        self.data =  $http.get("https://api.edamam.com/search?q="+input+"&app_id="+appID+"&app_key="+key);
        }
  
        self.Get = function(){
            return self.data;
        }

        self.addFave = function(item) {

            for(let i = 0; i < self.faveArray.length; i++){
                
                //console.log();

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

//Maybe store response in a variable