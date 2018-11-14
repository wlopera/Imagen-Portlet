(function(Liferay, angular) {
   
	"use strict";

	angular.portlet.add("com_imagen_portlet", "ImagenPortlet",
      function() {

		var myModule = angular.module("myModule", []);

         myModule.controller('ImagenController', ['$scope', '$http', function($scope, $http) {
        
		$scope.imageDog = '';
		$scope.imageCat = '';
		$scope.imageRandomImagen = '';
		
		$scope.isActive = true;
		
		/*
		 * Consultar imagen de un perro
		 */
		 $scope.getRandomDog = function() {
		   $http.get("https://dog.ceo/api/breeds/image/random").then(function(response) {        
		     //console.log(response);
		     $scope.isActive = true;
		     $scope.imageDog = response.data.message;
		  });
	    };
	    
	    /*
		 * Consultar imagen de un gato
		 */
		 $scope.getRandomCat = function() {
		   $http.get("https://aws.random.cat/meow").then(function(response) {        
		     //console.log(response);
		     $scope.isActive = false;
		     $scope.imageCat = response.data.file;
		  });
	    };
	    
	    /*
		 * Consultar imagen de un gato
		 */
		 $scope.getRandomImagen = function() {
		   $http.get("http://www.splashbase.co/api/v1/images/random").then(function(response) {        
		     //console.log("image:%O", response.data.url);
		     $scope.isActive = false;
		     $scope.imageRandomImagen = response.data.url;
		  });
	    };
	    
	    
	    $scope.getRandomDog();
	
	  }]);    
   
      return [ myModule.name ];
	
  });
	
})(Liferay, angular);