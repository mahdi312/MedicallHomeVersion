angular.module("APP").controller("goToDoctorDashboard", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : verifyDoctor 

$rootScope.goToDoctorDashboard = function($scope,param,$event){
 		// Navigate : DoctorDashboard/PHYSICIAN_INFO
	$scope.navigateULR("DoctorDashboard_InfoTabs","DD_DoctorInfo_Tab");
};
} 
]);