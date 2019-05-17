angular.module("APP").controller("validateSendSMS", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : sendSMS1 

    $rootScope.validateSendSMS = function ($scope, param, $event) {
        $scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
        $scope.objData = {};
        $scope.objData.input1 = $scope.nationalCode;
        url = 'http://172.16.201.212:8081/rest/api/v1/validate/sms/send/confirm';
        $scope.callBack_10100 = function (data) {
            $rootScope.smsData = data.result;
            localStorage.setItem("__localStorage.__expirationTime", data.expiration_time);

            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Navigate : Sign Up/verifyPage
                $scope.navigateULR("MemberShip", "MS_VerifyPage_PHNP");
            }
        };
        $rootScope.sendData($scope, url, $scope.objData, 'Post', 'callBack_10100');
    };


}
]);