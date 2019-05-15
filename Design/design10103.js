angular.module("APP").controller("Design_10103", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : getDoctorCode 

    $rootScope.design_10103 = function ($scope, param, $event) {

        $scope.globalEntity1 = {};
        $scope.globalEntity1.person = {};
        $scope.globalEntity1.person.id = $scope.patientId;
        $scope.globalEntity1.doctorAccount = {};
        $scope.globalEntity1.doctorAccount.doctorNumber = $scope.patientInfo.doctorNumber;
        $scope.globalEntity1.membershipStatus = 1;


        url = 'http://172.16.201.212:8081/rest/api/v1/membership/signup/doctor';
        $scope.callBack_10103 = function (data) {

            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Navigate : DoctorSignUp/ACCOUNT_INFO
                $scope.navigateULR(180339, 190488);
            }
        };
        $rootScope.sendData($scope, url, $scope.globalEntity1, 'Post', 'callBack_10103');
    };


}
]);