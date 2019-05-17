angular.module("APP").controller("goToPreviousWindow", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goBackWindow 

$rootScope.goToPreviousWindow = function($scope,param,$event){
	window.history.back();
};
} 
]);