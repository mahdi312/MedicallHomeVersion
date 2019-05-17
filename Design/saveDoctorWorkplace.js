angular.module("APP").controller("saveDoctorWorkplace", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : addInfoToWorkPlace 

    $rootScope.saveDoctorWorkplace = function ($scope, param, $event) {
        $scope.Form.doctorAccount = {};
        $scope.Form.doctorAccount.id = $scope.DocInfo.id;

        url = 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/workplace/save';
        $scope.callBack_10125 = function (data) {
            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Design : getWorkplaceData
                $rootScope.getWorkplaceData($scope);
            }
        };
        $rootScope.sendData($scope, url, $scope.Form, 'Post', 'callBack_10125');
    };


}
]);