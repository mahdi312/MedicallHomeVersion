angular.module("APP").controller("changeDate", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : dateChangePerson 

$rootScope.changeDate = function($scope,param,$event){
	$scope.PatientInfo.birthDate=$filter('date')($scope.PatientInfo.birthDate,'yyyy/MM/dd');
};
} 
]);