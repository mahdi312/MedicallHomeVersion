angular.module("APP").controller("goToDoctorSignUp", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToDoctorSignUp 

$rootScope.goToDoctorSignUp = function($scope,param,$event){
	
	
 		// Navigate : DoctorSignUp/PHYSICIAN_COUNCIL_CODE
	$scope.navigateULR("DoctorSignUp","DSU_PhysicianCouncilCode");
};



} 
]);