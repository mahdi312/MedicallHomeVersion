angular.module('APP').controller('accountCtrl', function($scope, $rootScope) {
    $scope.loginTime=localStorage.getItem("__localStorage.__loginTime");

});
