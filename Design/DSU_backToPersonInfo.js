angular.module("APP").controller("DSU_backToPersonInfo", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : backToAccountInfo 

$rootScope.DSU_backToPersonInfo = function($scope,param,$event){
	
	
 		// Navigate : DoctorSignUp/ACCOUNT_INFO
	$scope.navigateULR("DoctorSignUp","DSU_AccountInformation");
};



} 
]);