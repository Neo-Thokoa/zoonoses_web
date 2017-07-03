transluxModule.controller("promotionsCtrl",
    ["$scope", "$location",
    function ($scope, $location) {

      $scope.Name = "Promotions Page";

            $scope.url = {

        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
        }

}]);
