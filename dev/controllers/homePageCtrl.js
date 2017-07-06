zoonosisModule.controller("homePageCtrl",
    ["$scope", "$location",
    function ($scope, $location) {

      $scope.message = "Welcome. Please use the various menu items to navigate the system.";
      $scope.feedColor = "#005bab";

      $scope.Name = "Home Page";

      $scope.cleaner = function()
        {
            $rootScope = null;
        }


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
          $rootScope = null;
        	$location.path('/dataCollection');
        }

        $scope.setVar = function(num)
        {
          $scope.para = num;
        }

        $scope.viewFindings = function()
        {
          $rootScope = null;
        	$location.path('/findings');
        }
}]);
