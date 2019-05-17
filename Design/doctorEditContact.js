angular.module("APP").controller("doctorEditContact", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : saveDocContact 

$rootScope.doctorEditContact = function($scope,param,$event){
	$scope.saveDocContact = {};
	$scope.saveDocContact.id = $scope.DocInfo.id;
	$scope.saveDocContact.userName = $scope.DocInfo.userName;
	
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/doctor/edit';
	$scope.callBack_10122 = function(data){

        if (data.mdc_error_code == -1) {
            $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
        } else if (data.mdc_error_code == 1) {
            $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
        }
	};
	$rootScope.sendData($scope,url,$scope.saveDocContact,'Post','callBack_10122');
};



} 
]);