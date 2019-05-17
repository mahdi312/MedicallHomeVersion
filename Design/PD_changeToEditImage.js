angular.module("APP").controller("PD_changeToEditImage", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToEditImage 

$rootScope.PD_changeToEditImage = function($scope,param,$event){
 		// Navigate : PicPatientProfile/SavePatientPic
	$scope.navigateULR(180440,190680);
};
} 
]);