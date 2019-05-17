angular.module("APP").controller("patientSignOut", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : patientSignOut 

$rootScope.patientSignOut = function($scope,param,$event){
	$scope.patientId = localStorage.getItem("__localStorage.__patientId");
	//localStorage.clear();
	$rootScope.setDashboard("mainDashboard","mainPanel");
	
	url= 'http://172.16.201.212:8081/rest/api/v1/account/signout/patient/'+$scope.patientId+'';
	$scope.callBack_10150 = function(data){
		
		// $rootScope.signOut();
	};
	$rootScope.sendData($scope,url,null,'Get','callBack_10150');
};



} 
]);