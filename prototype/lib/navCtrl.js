transluxModule.controller("navCtrl",
    ["$scope", "$location","transluxService",
    function ($scope, $location,transluxService) {

   $scope.navigate = function(val)
   {
   	console.log(val);
   		if(val == 1)
   		{
   			  $location.path('/bookings');
   		}
   		else if(val == 2)
   		{
   			  $location.path('/routesAndTimetables');
   		}
   		else if(val == 3)
   		{
   			  $location.path('/customerCare');
   		}
   		else if(val == 4)
   		{
   			  $location.path('/promotions');
   		}
   		else if(val == 5)
   		{
   			  $location.path('/travelInfo');
   		}
   		else
   		{
   			$location.path('/');
   		}

   }

}]);
