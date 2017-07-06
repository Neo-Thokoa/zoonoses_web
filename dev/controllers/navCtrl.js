zoonosisModule.controller("navCtrl",
    ["$scope", "$location","zoonosisService",
    function ($scope, $location,zoonosisService) {

   $scope.navigate = function(val)
   {
   	console.log(val);
   		if(val == 1)
   		{
   			  $location.path('/dataCollection');
   		}
   		else if(val == 2)
   		{
   			  $location.path('/findings');
   		}
   		else
   		{
   			$location.path('/');
   		}

   }

   $scope.isActive = function(url)
   {
      var des = $location.path();


      if(des == url)
      {
        console.log(des);
        console.log(url);
        return true;
      }
      return false;
   }

   $scope.message = "Welcome. Please use the various menu items to navigate the system.";
        $scope.feedColor = "#005bab";


        $scope.cleaner = function () {
            $rootScope = null;
        }


        $scope.url = {

            templateUrl: "app/partials/navBar.html",
            controller: "navbarCtrl"
        }
        $scope.imagePath = 'img/washedout.png';
        $scope.showDarkTheme = true;
        $scope.settings = "../Content/images/settings1.png";
        $scope.funding = "../Content/images/Money-icon.png";
        $scope.projects = "../Content/images/research-icon.png";
        $scope.reports = "../Content/images/Custom-reports-icon.png";
        $scope.divisions = "../Content/images/division-icon.png";
        $scope.collaborators = "../Content/images/collaborators-icon.png";
        $scope.outputs = "../Content/images/outputs-icon.png";
        $scope.staffing = "../Content/images/staff-icon.png";
        $scope.institution = "../Content/images/institution-icon.png";
        $scope.departments = "../Content/images/Business-Department-icon.png";
        $scope.Admin = "../Content/images/administration-icon.png";





        $scope.viewdataCollection = function () {
            $rootScope = null;
            $location.path('/dataCollection');
        };
        $scope.viewFindings = function () {
            $rootScope = null;
            $location.path('/findings');
        };
        $scope.home = function () {
            $rootScope = null;
            $location.path('/home');
        }

        $scope.isActive = function (viewLocation, viewLocation2)
        {
            var des = $location.path();
            if(des.search("/usersAccount") > -1 || des.search("/userStaffEdit") > -1)
                return true;
            return false;
        }

        $scope.homeActive = function () {
            var des = $location.path();

            if (des.search("home") > -1)
            {
                //console.log(des);
                return true;
            }
            return false;
        }

}]);
