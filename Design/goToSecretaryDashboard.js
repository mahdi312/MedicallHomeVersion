angular.module("APP").controller("goToSecretaryDashboard", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToSercreteryDashboard 

$rootScope.goToSecretaryDashboard = function($scope,param,$event){
	
	
 		// Navigate : SecreteryDashboard/SECRETERY_INFO
	$scope.navigateULR(180376,190564);
};



} 
]);