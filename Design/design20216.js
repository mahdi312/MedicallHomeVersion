angular.module("APP").controller("Design_20216", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : saveSecretaryPass 

    $rootScope.design_20216 = function ($scope, param, $event) {
        $scope.saveSecPass = {};
        $scope.saveSecPass.person = {};
        $scope.saveSecPass.person.nationalCode = $scope.nationalCode;
        $scope.saveSecPass.input = $scope.Form.password;
        $scope.saveSecPass.input1 = $scope.Form.confirmPassword;

        url = 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/secretary/password/edit';
        $scope.callBack_20216 = function (data) {
            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code == 1) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Navigate : SecreteryDashboard/PERSONAL_INFO
                $scope.navigateULR(180376, 190628);
            }
        };
        $rootScope.sendData($scope, url, $scope.saveSecPass, 'Post', 'callBack_20216');
    };


}
]);