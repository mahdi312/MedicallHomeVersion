angular.module("APP").controller("DD_changeToEditImage", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : gotToEditDoctorPic 

$rootScope.DD_changeToEditImage = function($scope,param,$event){

 		// Navigate : PicDoctorProfile/editDoctorPic
	$scope.navigateULR(180343,190510);
};



} 
]);