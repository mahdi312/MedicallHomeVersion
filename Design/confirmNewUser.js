angular.module("APP").controller("confirmNewUser", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : confirmNewUser 

$rootScope.confirmNewUser = function($scope,param,$event){
	var mobile = $scope.Form.country+$scope.Form.cellPhone ;
	
	$rootScope.mobileNo = {};
	$rootScope.mobileNo.input = mobile ;
	url= 'http://172.16.201.212:8081/rest/api/v1/validate/sms/send/confirm';
	$scope.callBack_20196 = function(data){
		$rootScope.smsData = data.result;
        localStorage.setItem("__localStorage.__expirationTime", data.expiration_time);
        if (data.mdc_error_code == -1) {
            $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
        } else if (data.mdc_error_code == 1) {
            $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
            // Navigate : Sign Up/verifyPage
            $scope.navigateULR("MemberShip","MS_VerifyPage_FT");
        }
	};
	$rootScope.sendData($scope,url,$rootScope.mobileNo,'Post','callBack_20196');
};



} 
]);