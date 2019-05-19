app = angular.module("APP").controller("CtrlDSU_WorkplaceInfo", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http){
    $rootScope.labelTxt=$filter('translate')('WORKPLACE_POSTAL_CODE');
    $rootScope.labelTxt2=$filter('translate')('WORKPLACE_MAIN_ADDRESS');
    $rootScope.getTxt=function(){
        var txt = $scope.Form.addressType;
            if(txt==19) {
            $rootScope.labelTxt = $filter('translate')('OFFICE_POSTAL_CODE');
            $rootScope.labelTxt2 = $filter('translate')('OFFICE_MAIN_ADDRESS');
        }
        else if(txt==21) {
            $rootScope.labelTxt = $filter('translate')('CLINIC_POSTAL_CODE');
            $rootScope.labelTxt2 = $filter('translate')('CLINIC_MAIN_ADDRESS');
        }
        else if(txt==22) {
            $rootScope.labelTxt = $filter('translate')('HOSPITAL_POSTAL_CODE');
            $rootScope.labelTxt2 = $filter('translate')('HOSPITAL_MAIN_ADDRESS');
        }
        else if(txt==23) {
            $rootScope.labelTxt = $filter('translate')('DOCTORS_BUILDING_POSTAL_CODE');
            $rootScope.labelTxt2 = $filter('translate')('DOCTORS_BUILDING_MAIN_ADDRESS');
        }
    };
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
	
	
$scope.makeDesign_272436 = function(param){ 
	 $rootScope.doctorSignUp_MS4_01($scope,param);
} 

$scope.makeDesign_272437 = function(param){ 
	 $rootScope.DSU_backToSpecialty($scope,param);
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
 
 