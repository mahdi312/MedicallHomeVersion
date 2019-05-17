angular.module("APP").controller("goToChangeCellPhone", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : changePhoneNumber 

$rootScope.goToChangeCellPhone = function($scope,param,$event){
 		// Navigate : Sign Up/cellPhone
	$scope.navigateULR("MemberShip","MS_CellPhone");
};
} 
]);