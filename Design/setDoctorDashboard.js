angular.module("APP").controller("setDoctorDashboard", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : gotToDoctorProfile 

$rootScope.setDoctorDashboard = function($scope,param,$event){
	$rootScope.setDashboard("drDashboard","drProfilePanel");
	
};



} 
]);