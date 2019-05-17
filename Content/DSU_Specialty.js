app = angular.module("APP").controller("CtrlDSU_Specialty", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http){

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
	
	
$scope.makeDesign_272409 = function(param){ 
	 $rootScope.DSU_backToSetPassword($scope,param);
} 

$scope.makeDesign_272408 = function(param){ 
	 $rootScope.doctorSignUp_MS4_00($scope,param);
} 


 

 
 
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages');

 
 