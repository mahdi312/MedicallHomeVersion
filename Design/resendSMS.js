angular.module("APP").controller("resendSMS", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : resendSMS 

$rootScope.resendSMS = function($scope,param,$event){
	$scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
	$scope.objData = {};
	$scope.objData.input1 = $scope.nationalCode;
	url= 'http://172.16.201.212:8081/rest/api/v1/validate/sms/send/confirm';
	$scope.callBack_10111 = function(data){
		$rootScope.smsData = data.result;
        $scope.counter = data.expiration_time;
        myTimeout = $timeout($scope.onTimeout, 1000);
        if (data.mdc_error_code == -1) {
            $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
        } else if (data.mdc_error_code == 1) {
            $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
        }
	};
	$rootScope.sendData($scope,url,$scope.objData,'Post','callBack_10111');
};



} 
]);