angularFormsApp.controller('efController', function efController($scope, efService) {
    $scope.employee = efService.employee;
    $scope.departments = ["Engineering", "Finance", "Marketing", "Adminstration"];
});
