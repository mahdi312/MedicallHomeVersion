angular.module("APP").controller("doctorSignUp_MS3", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : goToSpecialty 

    $rootScope.doctorSignUp_MS3 = function ($scope, param, $event) {
        $scope.patientId = localStorage.getItem("__localStorage.__patientId");

        $rootScope.globalEntity3 = {};
        $rootScope.globalEntity3.person = {};
        $rootScope.globalEntity3.person.id = $scope.patientId;
        $rootScope.globalEntity3.doctorAccount = {};
        $rootScope.globalEntity3.doctorAccount.password = $scope.Form.password;
        $rootScope.globalEntity3.input = $scope.Form.confirmPassword;
        $rootScope.globalEntity3.membershipStatus = 3;
        url = 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/doctor';
        $scope.callBack_10099 = function (data) {

            if ($scope.Form.password == $scope.Form.confirmPassword) {
                if (data.mdc_error_code == -1) {
                    $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
                } else if (data.mdc_error_code == 1) {
                    $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                    // Navigate : DoctorSignUp/SPECIALITY
                    $scope.navigateULR("DoctorSignUp", "DSU_Specialty");
                }
            } else {
                $rootScope.resultMsg(2, $filter('translate')('PASSWORD_IS_NOT_MATCH_WITH_CONFIRM_PASSWORD'));
            }
        };
        $rootScope.sendData($scope, url, $rootScope.globalEntity3, 'Post', 'callBack_10099');
    };


}
]);