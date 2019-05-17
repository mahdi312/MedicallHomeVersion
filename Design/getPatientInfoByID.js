angular.module("APP").controller("getPatientInfoByID", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : getPersonInfoById 

$rootScope.getPatientInfoByID = function($scope,param,$event){
	localStorage.setItem("__localStorage.__nationalCode", null);
	$scope.patientId = localStorage.getItem("__localStorage.__patientId");
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/patient/'+$scope.patientId+'';
	$scope.callBack_10135 = function(data){
		$scope.PatientInfo = {};
		$scope.PatientInfo = data ;
	};
	$rootScope.sendData($scope,url,null,'Get','callBack_10135');
};



} 
]);