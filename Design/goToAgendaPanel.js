angular.module("APP").controller("goToAgendaPanel", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : goToAgendaPanel

$rootScope.goToAgendaPanel = function($scope,param,$event){
	$rootScope.workplace = {};
	$rootScope.workplace.id = $scope._workplace[param].id;
	
	
 		// Navigate : Panel/weeklyProgramArea
	$scope.navigateULR(180363,190535);
};



} 
]);