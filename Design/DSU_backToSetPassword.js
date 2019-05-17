angular.module("APP").controller("DSU_backToSetPassword", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : backToSetPassword 

$rootScope.DSU_backToSetPassword = function($scope,param,$event){
	
	
 		// Navigate : DoctorSignUp/SET_PASSWORD
	$scope.navigateULR("DoctorSignUp","DSU_SetPassword");
};



} 
]);