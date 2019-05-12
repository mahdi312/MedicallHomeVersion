angular.module("APP").controller("Design_10134", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : deactive/activeDoctorAccount 

    $rootScope.design_10134 = function ($scope, param, $event) {

        url = 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/doctor/toggle?doctorid=' + $rootScope.DocInfo.id + '&smsid=' + $scope.toggleStatus.result + '&smscode=' + $scope.Form.verifyCode + '';
        $scope.callBack_10134 = function (data) {

            if (data.mdc_error_msg == "DEACTIVATION_COMMITED") {
                $scope.DocInfo.active.id = 14;
                $scope.showMe = !$scope.showMe;
                $scope.disableConentList($scope.contents, [190496, 190504, 190505, 190506, 190507]);
            } else if (data.mdc_error_msg == "ACTIVATION_COMMITED") {
                $scope.DocInfo.active.id = 13;
                $scope.showMe = !$scope.showMe;
                $scope.enableConentList($scope.contents, [190496, 190504, 190505, 190506, 190507]);
            }
            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
            }
        };
        $rootScope.sendData($scope, url, null, 'Get', 'callBack_10134');
    };


}
]);