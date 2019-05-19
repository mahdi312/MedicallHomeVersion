angular.module("APP").controller("setDoctorDashboard", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : gotToDoctorProfile 

$rootScope.setDoctorDashboard = function($scope,param,$event){
	$rootScope.setDashboard("drDashboard","drProfilePanel");
    var lang = localStorage.getItem("__localStorage.__lang");
    $rootScope.changeLanguage(lang);
    $rootScope.changeLanText(lang);
};



} 
]);