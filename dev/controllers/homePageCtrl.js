transluxModule.controller("homePageCtrl",
    ["$scope", "$location",
    function ($scope, $location) {

      $scope.Name = "Home Page";
      $scope.openPage = function(url)
      {
        window.location = url;
      };

            $scope.url = {

        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
        }

        $scope.goToBookings = function()
        {
        	$location.path('/bookings');
        }

        $scope.setVar = function(num)
        {
          $scope.para = num;
        }
}]);
