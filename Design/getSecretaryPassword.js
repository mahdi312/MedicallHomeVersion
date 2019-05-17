angular.module("APP").controller("getSecretaryPassword", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : getSecPass 

$rootScope.getSecretaryPassword = function($scope,param,$event){
 		// Navigate : Sign Up/Password
	$scope.navigateULR("MemberShip","MS_SecretaryPassword");
};
} 
]);