angular.module("APP").controller("getDoctorPassword", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : getDocPass 

$rootScope.getDoctorPassword = function($scope,param,$event){
 		// Navigate : Sign Up/Password
	$scope.navigateULR("MemberShip","MS_DoctorPassword");
};



} 
]);