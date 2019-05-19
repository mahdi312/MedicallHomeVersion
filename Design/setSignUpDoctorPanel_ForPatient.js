angular.module("APP").controller("setSignUpDoctorPanel_ForPatient", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToPatientProfile 

$rootScope.setSignUpDoctorPanel_ForPatient = function($scope,param,$event){
	$rootScope.setDashboard("patientDashboard","patientToDoctorPanel");
	var lang = localStorage.getItem("__localStorage.__lang");
        $rootScope.changeLanguage(lang);
        $rootScope.changeLanText(lang);
};
} 
]);