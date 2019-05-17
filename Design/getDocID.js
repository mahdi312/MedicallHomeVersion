angular.module("APP").controller("getDocID", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : getInitData 

$rootScope.getDocID = function($scope,param,$event){
	$scope.docId = 	localStorage.getItem("__localStorage.__doctorId"); 
	
};



} 
]);