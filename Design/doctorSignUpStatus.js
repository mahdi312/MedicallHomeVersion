angular.module("APP").controller("doctorSignUpStatus", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : getDocSignUpForFirstTime 

$rootScope.doctorSignUpStatus = function($scope,param,$event){
	$scope.patientId = localStorage.getItem("__localStorage.__patientId");
	
	url= 'http://172.16.201.212:8081/rest/api/v1/membership/signup/doctor/status/'+$scope.patientId+'';
	$scope.callBack_10119 = function(data){
		$scope.patientInfo = {} ;
		$scope.patientInfo = data ;
		};
	$rootScope.sendData($scope,url,null,'Get','callBack_10119');
};



} 
]);