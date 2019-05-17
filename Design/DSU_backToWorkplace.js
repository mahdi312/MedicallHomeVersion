angular.module("APP").controller("DSU_backToWorkplace", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : backToWorkplace 

$rootScope.DSU_backToWorkplace = function($scope,param,$event){

 		// Navigate : DoctorSignUp/WORKPLACE_INFO
	$scope.navigateULR("DoctorSignUp","DSU_WorkplaceInfo");
};
} 
]);