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

}]);
