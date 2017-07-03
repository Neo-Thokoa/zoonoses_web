transluxModule.controller("customerCareCtrl",
    ["$scope", "$location",
    function ($scope, $location) {

      $scope.Name = "Customer Care Page";

       $scope.url = {
        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
        }

}]);
