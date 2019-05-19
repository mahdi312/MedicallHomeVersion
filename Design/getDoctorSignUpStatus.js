angular.module("APP").controller("getDoctorSignUpStatus", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : getSignUpDocInfo 

$rootScope.getDoctorSignUpStatus = function($scope,param,$event){
	$scope.patientId = localStorage.getItem("__localStorage.__patientId");
	url= 'http://172.16.201.212:8081/rest/api/v1/membership/signup/doctor/status/'+$scope.patientId+'';
	$scope.callBack_20229 = function(data){
		$scope.patientInfo = {} ;
		$scope.patientInfo = data ; 
		if(data.membershipStatus === 0){
		$rootScope.setDashboard("mainDashboard","patientToDoctorPanel");
		 	// Navigate : DoctorSignUp/PHYSICIAN_COUNCIL_CODE
		 	$scope.navigateULR("DoctorSignUp","DSU_PhysicianCouncilCode");
		}
		
		if(data.membershipStatus == 1){
		    $rootScope.setDashboard("mainDashboard","patientToDoctorPanel");
		 	// Navigate : DoctorSignUp/ACCOUNT_INFO
		 	$scope.navigateULR("DoctorSignUp","DSU_AccountInformation");
		}
		
		if(data.membershipStatus == 2){
		    $rootScope.setDashboard("mainDashboard","patientToDoctorPanel");
		 	// Navigate : DoctorSignUp/SET_PASSWORD
		 	$scope.navigateULR("DoctorSignUp","DSU_SetPassword");
		}
		
		if(data.membershipStatus == 3){
		    $rootScope.setDashboard("mainDashboard","patientToDoctorPanel");
		 	// Navigate : DoctorSignUp/SPECIALITY
		 	$scope.navigateULR("DoctorSignUp","DSU_Specialty");
		}
		};
	$rootScope.sendData($scope,url,null,'Get','callBack_20229');
};



} 
]);