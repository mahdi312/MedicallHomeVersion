angular.module("APP").controller("getFindData", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : getFindData 

$rootScope.getFindData = function($scope,param,$event){
	
	url= 'http://172.16.201.212:8081/rest/api/v1/membership/list/find';
	$scope.callBack_20215 = function(data){
		$scope.$eval("findData=" + JSON.stringify(data));
		$scope.personId=data[0].person_id;
		};
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20215');
};



} 
]);