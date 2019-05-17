angular.module("APP").controller("DSI_goToPatientState", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToYourPatientState

$rootScope.DSI_goToPatientState = function($scope,param,$event){
    $scope.patState = localStorage.getItem("__localStorage.__patState");

    if($scope.patState == 'php'){
    	//call patientSMS ->  patient pass
        $rootScope.confirmPatientSMS($scope);
	}else if($scope.patState == 'phnp'){
    	//call SEND SMS1 -> patient Dashboard
        $rootScope.validateSendSMS($scope);
	}
};



} 
]);