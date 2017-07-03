transluxModule.controller("travelInfoCtrl",
    ["$scope", "$location",
    function ($scope, $location) {

      $scope.Name = "Travel Info Page";

       $scope.url = {
        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
        }

}]);
