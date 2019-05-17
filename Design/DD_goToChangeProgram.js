angular.module("APP").controller("DD_goToChangeProgram", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToChangeProgram 

$rootScope.DD_goToChangeProgram = function($scope,param,$event){
	alert($rootScope.workplace.id)
	
 		// Navigate : ChangeProgram/WORK_DAY
	$scope.navigateULR(180365,190540);
};



} 
]);