angular.module("APP").controller("DSU_backToDocIDPage", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : backToGetDoctorId 

$rootScope.DSU_backToDocIDPage = function($scope,param,$event){
	
	
 		// Navigate : DoctorSignUp/PHYSICIAN_COUNCIL_CODE
	$scope.navigateULR("DoctorSignUp","DSU_PhysicianCouncilCode");
};



} 
]);