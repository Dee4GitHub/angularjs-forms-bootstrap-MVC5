angularFormsApp.controller('efController', function efController($scope, efService) {
    $scope.employee = efService.employee;
    $scope.departments = ["Administration","Engineering", "Finance", "Marketing"];

    $scope.SubmitClick = function() {
        console.log($scope.employee);
    }
});
