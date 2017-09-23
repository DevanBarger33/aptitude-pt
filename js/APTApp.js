var aptapp = angular.module('aptapp',[]);

aptapp.controller('aptController', function($scope) {
	$scope.footer = "app/shared/footer/footer.html";
	$scope.header = "app/shared/navbar/navbar.html";
});