angular.module("APP").controller("Design_20200", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : removeDoctorSignUp 

    $rootScope.design_20200 = function ($scope, param, $event) {
        $scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
        url = 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/doctor/remove/' + $scope.nationalCode + '';
        $scope.callBack_20200 = function (data) {
            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Design : clearLocalStorage
                $rootScope.design_20202($scope);
                // Navigate : Sign Up/signIn
                $scope.navigateULR(180332, 190478);
            }
        };
        $rootScope.sendData($scope, url, null, 'Get', 'callBack_20200');
    };


}
]);