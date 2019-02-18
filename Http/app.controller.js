"use strict"

const cntrl = function($scope, $http){
	
	this.Search = function(){
		
		$http.get("https://api.edamam.com/search?q="+$scope.search+"&app_id=c471afec&app_key=4d7a3e8fb6166e54fb00f65b193aa1aa&from=0&to=5&calories=591-722&health=alcohol-free")
		.then(function(response){
			
			console.log(response.data);
			
			for(let i = 0; i < response.data.hits[0].recipe.ingredients.length; i++){
			console.log(response.data.hits[0].recipe.ingredients[i].text);
			}
			
		});

	}
		
}

angular.module("App").controller("cntrl", cntrl);