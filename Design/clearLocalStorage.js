angular.module("APP").controller("clearLocalStorage", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : clearLocalStorage 

$rootScope.clearLocalStorage = function($scope,param,$event){
		localStorage.setItem("__localStorage.__nationalCode" , null);
	
};
} 
]);