angular.module("APP").controller("setPatientDashboard", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToPatientProfile 

$rootScope.setPatientDashboard = function($scope,param,$event){
	$rootScope.setDashboard("patientDashboard","patientProfilePanel");
	var lang = localStorage.getItem("__localStorage.__lang");
        $rootScope.changeLanguage(lang);
        $rootScope.changeLanText(lang);
};
} 
]);