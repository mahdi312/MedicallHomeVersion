angular.module("APP").controller("compareVerifyCode", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : compareVerifyCode 

    $rootScope.compareVerifyCode = function ($scope, param, $event) {
        $scope.Form.verifyCode = $scope.Form.verifyCode1.toString()+$scope.Form.verifyCode2.toString()+$scope.Form.verifyCode3.toString()+$scope.Form.verifyCode4;
        $scope.SmsObject = {};
        $scope.SmsObject.input = $scope.Form.verifyCode;
        $scope.SmsObject.input1 = $rootScope.smsData;
        url = 'http://172.16.201.212:8081/rest/api/v1/validate/sms/compare';
        $scope.callBack_20197 = function (data) {
            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Design : signUpPatient
                $rootScope.patientSignUp($scope);
            }
        };
        $rootScope.sendData($scope, url, $scope.SmsObject, 'Post', 'callBack_20197');
    };


}
]);