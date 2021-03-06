angular.module("APP").controller("checkPatientPassword", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : checkPatientPassword 

$rootScope.checkPatientPassword = function($scope,param,$event){
	$scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
	
	$scope.patPassObj = {} ;
	$scope.patPassObj.nationalCode = $scope.nationalCode;
	$scope.patPassObj.password=$scope.Form.password;
	url= 'http://172.16.201.212:8081/rest/api/v1/membership/patient/password/check';
	$scope.callBack_10117 = function(data){
		localStorage.setItem("__localStorage.__token" , data.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , data.client_id);
		localStorage.setItem("__localStorage.__patientId" , data.result);
        localStorage.setItem("__localStorage.__loginTime", data.login_time);


        if (data.mdc_error_code == -1) {
            $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
        } else if (data.mdc_error_code == 1) {
            $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
            // Design : goToPatientProfile
            $rootScope.setPatientDashboard($scope);
        }
	};
	$rootScope.sendData($scope,url,$scope.patPassObj,'Post','callBack_10117');
};



} 
]);