angular.module("APP").controller("doctorSignUp_MS4_00", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToWorkPlace 

$rootScope.doctorSignUp_MS4_00 = function($scope,param,$event){
	$rootScope.globalEntity4 = {};
	$rootScope.globalEntity4.specialty = {};
	$rootScope.globalEntity4.specialty.id = $scope.Form.specialty;
	$rootScope.globalEntity4.membershipStatus = 4;
	
	$rootScope.specialty = {};
	$rootScope.specialty.name = $scope.Form.specialty.name;
	
 		// Navigate : DoctorSignUp/WORKPLACE_INFO
	$scope.navigateULR("DoctorSignUp","DSU_WorkplaceInfo");
};



} 
]);