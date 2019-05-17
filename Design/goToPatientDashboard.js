angular.module("APP").controller("setPatientDashboard", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : setPatientDashboard

$rootScope.setPatientDashboard = function($scope,param,$event){
	$rootScope.setDashboard("patientDashboard","patientProfilePanel");
};



} 
]);