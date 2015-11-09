angularFormsApp.controller('efController', function efController($scope, DataService) {
    $scope.employee = DataService.employee;
    $scope.departments = ["Administration","Engineering", "Finance", "Marketing"];

    $scope.SubmitClick = function() {
        console.log($scope.employee);
    }
});
