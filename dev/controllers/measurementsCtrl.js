zoonosisModule.controller("customerCareCtrl",
    ["$scope", "$location",
    function ($scope, $location) {

      $scope.Name = "Measurements Page";

       $scope.url = {
        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
        }

}]);
