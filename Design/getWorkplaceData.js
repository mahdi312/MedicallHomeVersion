angular.module("APP").controller("getWorkplaceData", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : getWorkplaceData 

$rootScope.getWorkplaceData = function($scope,param,$event){
	
	$rootScope.getInitData('_workplace','','0','workplace/list/doctor/'+DocInfo.id+'',{},this)
};



} 
]);