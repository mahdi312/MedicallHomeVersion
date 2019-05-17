angular.module("APP").controller("PD_changeToShowImage", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToShowImage 

$rootScope.PD_changeToShowImage = function($scope,param,$event){
 		// Navigate : PicPatientProfile/ShowPatientPic
	$scope.navigateULR(180440,190679);
};
} 
]);