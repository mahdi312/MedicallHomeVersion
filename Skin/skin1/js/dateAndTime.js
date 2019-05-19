angular.module('APP').controller('dateAndTimeCtrl', function($scope, $rootScope,$interval) {
	var tick = function() {
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick, 1000);
	
	$scope.today=moment();
	$scope.todayDate=$scope.today.jDate();
	$scope.todayMonth=$scope.today.jMonth()+1;
	$scope.todayYear=$scope.today.jYear();
	$scope.todayDateName=new persianDate([$scope.todayYear,$scope.todayMonth,$scope.todayDate]).format('dddd'); 
	$scope.todayMonthName=new persianDate([$scope.todayYear,$scope.todayMonth,$scope.todayDate]).format('MMMM');
});
