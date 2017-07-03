zoonosisModule.controller("homePageCtrl",
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

        $scope.goTodataCollection = function()
        {
        	$location.path('/dataCollection');
        }

        $scope.setVar = function(num)
        {
          $scope.para = num;
        }
}]);
