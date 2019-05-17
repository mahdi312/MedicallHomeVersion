angular.module("APP").controller("doctorSignOut", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : doctorSignOut 

$rootScope.doctorSignOut = function($scope,param,$event){
	$scope.doctorId = localStorage.getItem("__localStorage.__doctorId");
	//localStorage.clear();
	
	$rootScope.setDashboard("mainDashboard","mainPanel");
	
	
	url= 'http://172.16.201.212:8081/rest/api/v1/account/signout/doctor/'+$scope.doctorId+'';
	$scope.callBack_10149 = function(data){
        if (data.mdc_error_code == -1) {
            $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
        } else if (data.mdc_error_code == 1) {
            $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
            // Navigate : Sign Up/firstPage
            $scope.navigateULR("MemberShip","MS_FirstPage");
        }
	};
	$rootScope.sendData($scope,url,null,'Get','callBack_10149');
};



} 
]);