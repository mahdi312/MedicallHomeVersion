angular.module("APP").controller("Design_10132", ['$rootScope', '$scope', '$http', '$q', '$filter', function ($rootScope, $scope, $http, $q, $filter) {

////////////////// code for action : saveBiography 

    $rootScope.design_10132 = function ($scope, param, $event) {
        $scope.saveBio = {};
        $scope.saveBio.id = $scope.DocInfo.id;
        $scope.saveBio.biography = $scope.DocInfo.biography;

        url = 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/doctor/edit';
        $scope.callBack_10132 = function (data) {

            if (data.mdc_error_code == -1) {
                $rootScope.resultMsg(2, $filter('translate')(data.mdc_error_msg));
            } else if (data.mdc_error_code === 0) {
                $rootScope.resultMsg(1, $filter('translate')(data.mdc_error_msg));
                // Navigate : DoctorBio/showBio
                $scope.navigateULR(180378, 190573);
            }
        };
        $rootScope.sendData($scope, url, $scope.saveBio, 'Post', 'callBack_10132');
    };


}
]);