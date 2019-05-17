app = angular.module("APP").controller("CtrlDD_DoctorDeactivateOrActivate_Tab", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http','$timeout', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http,$timeout){

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
	
	
$scope.makeDesign_272539 = function(param){ 
	 $rootScope.activeDeactivateDocPanel($scope,param);
} 

$scope.makeDesign_272542 = function(param){ 
	 $rootScope.activeDeativateDoctorAccount($scope,param);
} 

$scope.makeDesign_282682 = function(param){ 
	 $rootScope.resendSMS($scope,param);
} 
 

 
 
 	$rootScope.startTimer = function(limit,variable,step)
	{
		$rootScope.__step = step;
		$rootScope[variable] = limit;
		var timer = function() {
			if($rootScope[variable] > 0 ) {
				$rootScope[variable] = $rootScope[variable] - 1;
				$timeout(timer, step);
			}
		}
		timer();
	}
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','ngMask');

 
 app.directive('validNumber', function() {
  return {
    require: '?ngModel',
    link: function(scope, element, attrs, ngModelCtrl) {
      if(!ngModelCtrl) {
        return; 
      }

      ngModelCtrl.$parsers.push(function(val) {
        if (angular.isUndefined(val)) {
            var val = '';
        }
        var clean = val.replace( /[^0-9]+/g, '');
        if (val !== clean) {
          ngModelCtrl.$setViewValue(clean);
          ngModelCtrl.$render();
        }
        return clean;
      });

      element.bind('keypress', function(event) {
        if(event.keyCode === 32) {
          event.preventDefault();
        }
      });
    }
  };
});
 