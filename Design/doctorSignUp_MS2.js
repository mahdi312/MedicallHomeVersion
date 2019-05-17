angular.module("APP").controller("doctorSignUp_MS2", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : savePersonObject 

    $rootScope.doctorSignUp_MS2 = function ($scope, param, $event) {
        $scope.globalEntity2 = {};
        $scope.globalEntity2.person = {};
        $scope.globalEntity2.person.id = $scope.patientId;
        $scope.globalEntity2.person.firstName = $scope.patientInfo.person.firstName;
        $scope.globalEntity2.person.lastName = $scope.patientInfo.person.lastName;
        $scope.globalEntity2.person.gender = {};
        $scope.globalEntity2.person.gender.id = $scope.patientInfo.person.gender;
        $scope.globalEntity2.person.birthDate = $scope.patientInfo.person.birthDate;
        $scope.globalEntity2.membershipStatus = 2;
        url = 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/doctor';
        $scope.callBack_10105 = function (data) {

            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Navigate : DoctorSignUp/SET_PASSWORD
                $scope.navigateULR("DoctorSignUp", "DSU_SetPassword");
            }
        };
        $rootScope.sendData($scope, url, $scope.globalEntity2, 'Post', 'callBack_10105');
    };


}
]);