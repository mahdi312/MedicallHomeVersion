app = angular.module("APP").controller("CtrlMS_SetSecretaryPassword", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http){

	// angularJs-Content -> TemplateType
	// For Dialog 
	$scope.getDynamicData = function(variable,staticData,baseUrlId,url,catalog,filter,$scope){
		$rootScope.getDynamicData(variable,staticData,baseUrlId,url,catalog,filter,$scope);
	};
	$scope.getData = function(variable,url,filter,scope){
		$rootScope.getData(variable,url,filter,scope);
	};
	
	$scope.sendData = function ($scope,url,param,methodType,callback,scope) {
		$rootScope.sendData($scope,url,param,methodType,callback,scope);
	};
	
	$scope.getInitData = function(variable,staticData,baseUrlId,url,param,scope){
		$rootScope.getInitData(variable,staticData,baseUrlId,url,param,scope);
	};
	//End For Dialog
	
	
$scope.makeDesign_293139 = function(param){ 
	 $rootScope.setSecretaryPassword($scope,param); 
};

    $scope.inputType1 = "password";
    $scope.visibility1 = 'visibility_off';

    $scope.changeInputType = function () {
        if ($scope.inputType1 == "password") {
            $scope.inputType1 = "text";
            $scope.visibility1 = 'visibility_on';
        } else {
            $scope.inputType1 = "password";
            $scope.visibility1 = 'visibility_off';

        }
    };

    $scope.inputType2 = "password";
    $scope.visibility2 = 'visibility_off';

    $scope.changeInputType1 = function () {
        if ($scope.inputType2 == "password") {
            $scope.inputType2 = "text";
            $scope.visibility2 = 'visibility_on';
        } else {
            $scope.inputType2 = "password";
            $scope.visibility2 = 'visibility_off';

        }
    }
 
 
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','ngMask');

app.directive('passwordVerify', function() {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        link: function(scope, elem, attrs, ngModel) {
            if (!ngModel) return; // do nothing if no ng-model

            // watch own value and re-validate on change
            scope.$watch(attrs.ngModel, function() {
                validate();
            });

            // observe the other value and re-validate on change
            attrs.$observe('passwordVerify', function(val) {
                validate();
            });

            var validate = function() {
                // values
                var val1 = ngModel.$viewValue;
                var val2 = attrs.passwordVerify;

                // set validity
                ngModel.$setValidity('passwordVerify', val1 === val2);
            };
        }
    };
});

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

app.directive('mdFive', ['md5',
    function(md5,$parse) {
        return {
            restrict: "EA",
            link: function(scope, element, attrs){
                if(attrs.mdFive=="true"){
                    scope.$watch(attrs.ngModel, function (v) {
                        if(v)
                            scope.$eval(""+attrs.ngModel.replace('__','')+"='"+md5.createHash(v)+"'");
                    });
                }
            }
        }
    }
]);