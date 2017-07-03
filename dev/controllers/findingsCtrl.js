transluxModule.controller("routesAndTimetablesCtrl",
    ["$scope", "$location","transluxService",
    function ($scope, $location,transluxService) {

      $scope.Name = "Routes And Timetable Page";

      // var markersArray = {};

      transluxService.getDeparturePoints('./Json/').then(function (results) {
          console.log(results.data);
          $scope.departurePoints = results.data;
      },
      function (results) {
          // on error.
          console.log(results);
      });

        $scope.url = {

        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
        }



      var SouthAfricanRegion = {
            northEast: {
                lat: -20.46818922264095,
                lng: 47.197265625
            },
            southWest: {
                lat: -35.6037187406973,
                lng: 6.0205078125
            }
        }

        //get sa lat nd long here
        //https://www.distancesto.com/coordinates/za/polokwane-latitude-longitude/history/7767.html

        angular.extend($scope, {
            maxbounds: SouthAfricanRegion,
            defaults: {
                scrollWheelZoom: true,
                maxZoom: 15,
                minZoom: 1,
            },
            SouthAfrica: {
                lat: 24.00,
                lng: 29.00,
                zoom: 5
            },
            paths: {
		            p1: {
		            	//pretoria to capetown
		                color: '#008000',
		                weight: 4,
		                latlngs: [
		                { lat: 	-25.745536, lng: 28.185559 },
		                    { lat: -26.195246, lng: 28.034088 },
		                    { lat: 	-33.918861, lng: 18.423300 }
		                ],
		            },
		            p2: {
		            	//jhb to durban
		                color: '#008000',
		                weight: 4,
		                latlngs: [
		                    { lat: -26.195246, lng: 28.034088 },
		                    { lat: 	-29.839285, lng: 31.024377 }
		                ],
		            },
		            p3: {
		            	//jhb to pe
		                color: '#008000',
		                weight: 4,
		                latlngs: [
		                    { lat: -26.195246, lng: 28.034088 },
		                    { lat: 	-29.13184, lng: 26.195021 },
		                    { lat: 	-33.958056, lng: 25.6 }
		                ],
		            },
		             p4: {
		             	//SIBASA - JHB
		                color: '#008000',
		                weight: 4,
		                latlngs: [
		                    { lat: -22.932497, lng: 30.467446 },
		                    { lat: -23.8961708, lng: 29.4486263 },
		                    { lat: 	-26.195246, lng: 28.034088 }
		                ],
		            }
		        },
		     markers: {

		            Johanesburg: {
		                lat: -26.195246,
		                lng: 28.034088,
		      			message: "Johanesburg Park Station",
                		focus: true,
                		draggable: false
		              },
		            Cape_Town: {
		                lat: -33.918861,
		                lng: 18.423300,
		                message: "Cape Town Station",
                		focus: true,
                		draggable: false
		            },
		            Pretoria: {
		                lat: -25.745536,
		                lng: 28.185559,
		                message: "Pretoria Bosman Station",
                		focus: true,
                		draggable: false
		            },
		            Durban: {
		                lat: -29.839285,
		                lng: 31.024377,
		                message: "Daburn Central Station",
                		focus: true,
                		draggable: false
		            },
		            Bloemfontein: {
		                lat: -29.13184,
		                lng: 26.195021,
		                message: "Bloemfontein Station",
                		focus: true,
                		draggable: false
		            },
		            PortElizaberth: {
		                lat: -33.958056,
		                lng: 25.6,
		                message: "Port Elizabeth Station",
                		focus: true,
                		draggable: false
		            },
		            Sibasa: {
		                lat: -22.932497,
		                lng: 30.467446,
		                message: "Sibasa Station",
                		focus: true,
                		draggable: false
		            },
		             Polokwane: {
		                lat: -23.8961708,
		                lng: 29.4486263,
		                message: "Polokwane Station",
                		focus: true,
                		draggable: false
		            },

		        },

            events: {
                map: {
                    enable: ['zoomstart', 'drag', 'click', 'mousemove'],
                    logic: 'emit'
                }
            }

        });
        //detect click event
        $scope.$on('leafletDirectivePath.click', function (event, path) {
                $scope.event = "clicked";
                console.log(path);


                if(path.modelName == "p1")
                {
                	//pretoria to capetown
                	for(var i = 0;i < $scope.departurePoints.length;i++)
                	{
                		if($scope.departurePoints[i].Id == 3)
                		{
                			$scope.pointA = $scope.departurePoints[i];
                		}

                		if($scope.departurePoints[i].Id == 8)
                		{
                			$scope.pointB = $scope.departurePoints[i];
                		}
                	}

                }
                else if(path.modelName == "p2")
                {
                	//jhb to durban
                	for(var i = 0;i < $scope.departurePoints.length;i++)
                	{
                		if($scope.departurePoints[i].Id == 4)
                		{
                			$scope.pointA = $scope.departurePoints[i];
                		}

                		if($scope.departurePoints[i].Id == 5)
                		{
                			$scope.pointB = $scope.departurePoints[i];
                		}
                	}

                }
                else if(path.modelName == "p3")
                {
                	  	//jhb to pe
                	 for(var i = 0;i < $scope.departurePoints.length;i++)
                	{
                		if($scope.departurePoints[i].Id == 4)
                		{
                			$scope.pointA = $scope.departurePoints[i];
                		}

                		if($scope.departurePoints[i].Id == 7)
                		{
                			$scope.pointB = $scope.departurePoints[i];
                		}
                	}
                }
                else if(path.modelName == "p4")
                {
                	//SIBASA - JHB

                	 for(var i = 0;i < $scope.departurePoints.length;i++)
                	{
                		if($scope.departurePoints[i].Id == 1)
                		{
                			$scope.pointA = $scope.departurePoints[i];
                		}

                		if($scope.departurePoints[i].Id == 7)
                		{
                			$scope.pointB = $scope.departurePoints[i];
                		}
                	}

                }
                else{

                	console.log("else");
                }
                $scope.checkValidate();
        });


$scope.book = function()
{
	var pathData =  $scope.pointA.Id +","+$scope.pointB.Id;
	console.log(pathData);
       $location.path('/bookings/' + pathData);
}

$scope.validEq = false;
$scope.checkValidate = function(){

    $scope.validEq = false;
    if(($scope.pointA != null && $scope.pointB != null) && $scope.pointA == $scope.pointB)
    {
        $scope.validEq = true;
    }
}



}]);
