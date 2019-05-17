angular.module("APP").controller("getUserStatus", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : userStatus 

    $rootScope.getUserStatus = function ($scope, param, $event) {
        localStorage.setItem("__localStorage.__nationalCode", $scope.Form.nationalCode);

        url = 'http://172.16.201.212:8081/rest/api/v1/membership/status/' + $scope.Form.nationalCode + '';
        $scope.callBack_10092 = function (data) {

            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));

                if (data.result == 'cell_phone') {
                    // Navigate : Sign Up/cellPhone
                    $scope.navigateULR("MemberShip", "MS_CellPhone");
                }

                if (data.result == 'patient_sms') {
                    // Design : sendSMS1
                    $rootScope.validateSendSMS($scope);
                }

                if (data.result == 'patient_password') {
                    // Design : patientSMS
                    $rootScope.confirmPatientSMS($scope);
                }

                if (data.result == 'doctor_patient_password') {
                    localStorage.setItem("__localStorage.__patState", 'php');
                    // Navigate : Sign Up/docPassword
                    $scope.navigateULR("MemberShip", "MS_DoctorPassword");
                }
                if (data.result == 'doctor_password') {
                    localStorage.setItem("__localStorage.__patState", 'phnp');
                    // Navigate : Sign Up/docPassword
                    $scope.navigateULR("MemberShip", "MS_DoctorPassword");
                }

                if (data.result == 'secretary_patient_password') {
                    localStorage.setItem("__localStorage.__patState", 'php');
                    // Navigate : Sign Up/secPass
                    $scope.navigateULR("MemberShip", "MS_SecretaryPassword");
                }
                if (data.result == 'secretary_password') {
                    localStorage.setItem("__localStorage.__patState", 'phnp');
                    // Navigate : Sign Up/secPass
                    $scope.navigateULR("MemberShip", "MS_SecretaryPassword");
                }

                if (data.result == 'secretary_password_is_required') {
                    // Navigate : Sign Up/setSecPass
                    $scope.navigateULR("MemberShip", "MS_SetSecretaryPassword");
                }
            }
        }
        ;
        $rootScope.sendData($scope, url, null, 'Get', 'callBack_10092');
    }
    ;


}
]);