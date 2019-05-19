angular.module("APP").controller("getDoctorInfoById", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : getDocInfoById 

$rootScope.getDoctorInfoById = function($scope,param,$event){
	$scope.doctorId = localStorage.getItem("__localStorage.__doctorId");
	
	url= 'http://172.16.201.212:8081/rest/api/v1/account/doctor/'+$scope.doctorId+'';
	$scope.callBack_10129 = function(data){
		$scope.DocInfo = {} ;
		$scope.DocInfo = data;
		if($scope.DocInfo.active.id==13){
		$scope.enableConentList($scope.contents,["DD_DoctorInfo_Tab","DD_Privacy_Tab","DD_DoctorContact_Tab","DD_DoctorWorkplace_Tab","DD_DoctorSecurity_Tab"]);
		}
		else if($scope.DocInfo.active.id==14){
		$scope.disableConentList($scope.contents,["DD_DoctorInfo_Tab","DD_Privacy_Tab","DD_DoctorContact_Tab","DD_DoctorWorkplace_Tab","DD_DoctorSecurity_Tab"]);
		}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10129');
};



} 
]);