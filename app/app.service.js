"use strict";
function AppService($location, $http) {
    const self = this;
    const key = "4d7a3e8fb6166e54fb00f65b193aa1aa";
    const appID = "c471afec";
    self.Search = function(input)  {
        //console.log(input)
        $location.path("/recipeList");
        self.data =  $http.get("https://api.edamam.com/search?q="+input+"&app_id="+appID+"&app_key="+key);
        }
  
        self.Get = function(){
            return self.data;
        }

    }

angular.module("App").service("AppService", AppService);

//Maybe store response in a variable