angular.module("APP").controller("setLanguage", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){

////////////////// code for action : setLanguage

$rootScope.setLanguage = function($scope,param,$event){
    // url = 'http://172.16.201.212:8081/rest/api/v1/account/language/set?national_code='++'&client_id=479e6d7a-850b-4da0-be3b-7ab3be689ab8&lang=51';
    $scope.callBack_10100 = function (data) {
        }
    };
    $rootScope.sendData($scope, url, $scope.Form, 'Get', 'callBack_10100');
} 
]);