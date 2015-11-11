angularFormsApp.controller('efController', function efController($scope,$window, DataService) {
    $scope.employee = DataService.employee;
    $scope.departments = ["Administration","Engineering", "Finance", "Marketing"];
    $scope.editableEmployee = angular.copy($scope.employee);
    $scope.SubmitForm= function () {
        $scope.employee = angular.copy($scope.editableEmployee);
        $window.history.back();
        //console.log("submit button clicked");
    }

    $scope.CancelForm = function () {
        $window.history.back();
        //console.log("cancel button clicked");
    }
});
