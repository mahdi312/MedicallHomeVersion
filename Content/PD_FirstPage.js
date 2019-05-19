app = angular.module("APP").controller("patientDashboardCtrl", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast){
	$rootScope.loginTime=localStorage.getItem("__localStorage.__loginTime");
	//$rootScope.loginTime.format('jYYYY/jM/jD')
	//$rootScope.a=new Date($rootScope.loginTime);
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
	
	 

}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages');
