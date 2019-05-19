angular.module("APP").controller("doctorSignUpRemove", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : removeDoctorSignUp 

    $rootScope.doctorSignUpRemove = function ($scope, param, $event) {
        $scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
        url = 'http://172.16.201.212:8081/rest/api/v1/membership/signup/doctor/remove/' + $scope.nationalCode + '';
        $scope.callBack_20200 = function (data) {
            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Design : clearLocalStorage
                $rootScope.clearLocalStorage($scope);
                // Navigate : Sign Up/signIn
                $rootScope.setDashboard("mainDashboard","mainPanel");
            }
        };
        $rootScope.sendData($scope, url, null, 'Get', 'callBack_20200');
    };


}
]);