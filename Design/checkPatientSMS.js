angular.module("APP").controller("checkPatientSMS", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : checkPatientSMS 

$rootScope.checkPatientSMS = function($scope,param,$event){
    $scope.Form.verifyCode = $scope.Form.verifyCode1.toString()+$scope.Form.verifyCode2.toString()+$scope.Form.verifyCode3.toString()+$scope.Form.verifyCode4;
    $scope.SmsObject = {} ;
	$scope.SmsObject.input = $scope.Form.verifyCode;
	$scope.SmsObject.input1 = $rootScope.smsData;
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/patient/sms/check';
	$scope.callBack_20199 = function(data){
        if (data.mdc_error_code == -1) {
            $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
        } else if (data.mdc_error_code == 1) {
            $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
            // Navigate : Sign Up/Password
            $scope.navigateULR("MemberShip","MS_PatientPassword");
        }
	};
	$rootScope.sendData($scope,url,$scope.SmsObject,'Post','callBack_20199');
};



} 
]);