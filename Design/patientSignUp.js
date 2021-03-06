angular.module("APP").controller("patientSignUp", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : signUpPatient 

    $rootScope.patientSignUp = function ($scope, param, $event) {
        $scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
        $scope.verifyData = {};
        $scope.verifyData.person = {};
        $scope.verifyData.person.nationalCode = $scope.nationalCode;
        $scope.verifyData.person.mobileNo = $rootScope.mobileNo.input;
        url = 'http://172.16.201.212:8081/rest/api/v1/membership/signup/patient';
        $scope.callBack_10096 = function (data) {
            localStorage.setItem("__localStorage.__token", data.jwt_token);
            localStorage.setItem("__localStorage.__CLIENT_ID", data.client_id);
            localStorage.setItem("__localStorage.__patientId", data.result);
            localStorage.setItem("__localStorage.__loginTime", data.login_time);


            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Navigate : Sign Up/approvePage
                $scope.navigateULR("MemberShip", "MS_ApprovePage");
            }
        };
        $rootScope.sendData($scope, url, $scope.verifyData, 'Post', 'callBack_10096');
    };
}
]);