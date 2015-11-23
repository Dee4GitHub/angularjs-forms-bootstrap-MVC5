angularFormsApp.controller('efController', function efController($scope, $window, $routeParams, DataService) {
    if ($routeParams.id) {
        $scope.employee = DataService.getEmployee($routeParams.id);
    } else {
        $scope.employee = { id: 0 };
    }
    
    $scope.departments = ["Administration","Engineering", "Finance", "Marketing"];
    $scope.editableEmployee = angular.copy($scope.employee);
    $scope.SubmitForm = function () {
        if ($scope.editableEmployee.id == 0) {
            //Insert new employee
            DataService.insertEmployee($scope.editableEmployee);
        } else {
            //Update the employee
            DataService.updateEmployee($scope.editableEmployee);
        }
        $scope.employee = angular.copy($scope.editableEmployee);
        $window.history.back();
        //console.log("submit button clicked");
    }

    $scope.CancelForm = function () {
        $window.history.back();
        //console.log("cancel button clicked");
    }
});
