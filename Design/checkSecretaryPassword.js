angular.module("APP").controller("checkSecretaryPassword", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : checkSecretaryPassword 

$rootScope.checkSecretaryPassword = function($scope,param,$event){
	$scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
	$scope.secPassObj = {} ;
	$scope.secPassObj.nationalCode = $scope.nationalCode;
	$scope.secPassObj.password=$scope.Form.password;
	url= 'http://172.16.201.212:8081/rest/api/v1/membership/secretary/password/check';
	$scope.callBack_10157 = function(data){
		localStorage.setItem("__localStorage.__token" , data.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , data.client_id);
		localStorage.setItem("__localStorage.__secId" , data.result);
        localStorage.setItem("__localStorage.__loginTime", data.login_time);

        if (data.mdc_error_code == -1) {
            $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
        } else if (data.mdc_error_code == 1) {
            $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
            // Design : getSecInfoById
            $rootScope.getSecretaryInfoById($scope);
        }
	};
	$rootScope.sendData($scope,url,$scope.secPassObj,'Post','callBack_10157');
};



} 
]);