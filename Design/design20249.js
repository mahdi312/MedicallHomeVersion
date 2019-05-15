angular.module("APP").controller("Design_20249", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : saveDocContact2 

    $rootScope.design_20249 = function ($scope, param, $event) {
        $scope.saveDocContact = {};
        $scope.saveDocContact.id = $scope.DocInfo.id;
        $scope.saveDocContact.email = $scope.DocInfo.email;

        url = 'http://172.16.201.212:8081/rest/api/v1/account/doctor/edit';
        $scope.callBack_20249 = function (data) {
            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
            }
        };
        $rootScope.sendData($scope, url, $scope.saveDocContact, 'Post', 'callBack_20249');
    };


}
]);