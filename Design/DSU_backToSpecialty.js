angular.module("APP").controller("DSU_backToSpecialty", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : backToSpecialty 

$rootScope.DSU_backToSpecialty = function($scope,param,$event){

 		// Navigate : DoctorSignUp/SPECIALITY
	$scope.navigateULR("DoctorSignUp","DSU_Specialty");
};
} 
]);