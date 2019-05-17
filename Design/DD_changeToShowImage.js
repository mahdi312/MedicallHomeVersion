angular.module("APP").controller("DD_changeToShowImage", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToShowDoctorPic 

$rootScope.DD_changeToShowImage = function($scope,param,$event){

 		// Navigate : PicDoctorProfile/showDoctorPic
	$scope.navigateULR(180343,190572);
};



} 
]);