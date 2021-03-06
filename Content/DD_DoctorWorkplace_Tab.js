app = angular.module("APP").controller("CtrlDD_DoctorWorkplace_Tab", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http){

	// angularJs-Content -> TemplateType
	// For Dialog 
	$scope.getDynamicData = function(variable,staticData,baseUrlId,url,catalog,filter,$scope){
		$rootScope.getDynamicData(variable,staticData,baseUrlId,url,catalog,filter,$scope);
	}
	$scope.getData = function(variable,url,filter,scope){
		$rootScope.getData(variable,url,filter,scope);
	}
	
	$scope.sendData = function ($scope,url,param,methodType,callback,scope) {
		$rootScope.sendData($scope,url,param,methodType,callback,scope);
	}
	
	$scope.getInitData = function(variable,staticData,baseUrlId,url,param,scope){
		$rootScope.getInitData(variable,staticData,baseUrlId,url,param,scope);
	}
	//End For Dialog
	
	
$scope.makeDesign_272530 = function(param){ 
	 $rootScope.DD_goToAddNewAddress($scope,param);
} 

$scope.makeDesign_272582 = function(param){ 
	 $rootScope.activeDeactivateWorkplace($scope,param);
} 

$scope.makeDesign_272580 = function(param){ 
	 $rootScope.goToAgendaPanel($scope,param); 
} 

$scope.makeDesign_293469 = function(param){ 
	 $rootScope.getDoctorInfoById($scope,param);
} 
 

 
 
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages');

 
 