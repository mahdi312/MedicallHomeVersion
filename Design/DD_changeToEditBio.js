angular.module("APP").controller("DD_changeToEditBio", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToEditBio 

$rootScope.DD_changeToEditBio = function($scope,param,$event){
 		// Navigate : DoctorBio/ABOUT_ME
	$scope.navigateULR(180378,190571);
};
} 
]);