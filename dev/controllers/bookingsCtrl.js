transluxModule.controller("bookingsCtrl",
    ["$scope", "$location", "transluxService", "$routeParams",
    function ($scope, $location, transluxService, $routeParams) {

      var id = $routeParams.id;
      if(id != null)
      {
        var idList = id.split(',');
        console.log(idList);
      }

      //$scope.pageName = "Bookings Page";
      $scope.path = './Json/';

      transluxService.getDeparturePoints($scope.path).then(function (results) {
          //console.log(results.data);
          $scope.departurePoints = results.data;

          // for(var i = 0; i < idList.length; i++)
          // {
          if(id != null)
          {
              for(var x = 0; x < $scope.departurePoints.length; x++)
              {
                  if(idList[0] == $scope.departurePoints[x].Id)
                  {
                      $scope.departurePoint = $scope.departurePoints[x];
                  }
              }
              $scope.setDestinationPoints();
              for(var x = 0; x < $scope.destinationPoints.length; x++)
              {
                if(idList[1] == $scope.destinationPoints[x].Id)
                {
                    $scope.destinationPoint = $scope.destinationPoints[x];
                }
              }
              $scope.step = 3;
              $scope.loadEvents();
            }
          // }

      },
      function (results) {
          // on error.
          //console.log(results);
      });

      $scope.setDestinationPoints = function(){
        $scope.destinationPoints = JSON.parse(JSON.stringify($scope.departurePoints));
        var index = $scope.departurePoints.indexOf($scope.departurePoint);
        //console.log(index);
        if(index > -1){
          $scope.destinationPoints.splice(index, 1);
        }

      }

      $scope.getDates = function(){

        transluxService.getDates($scope.path).then(function (results) {
            //console.log(results.data);
            $scope.calendar = results.data;
        },
        function (results) {
            // on error.
            //console.log(results);
        });

      }

      $scope.check = function(indx, value, arr){
        console.log(indx);
        console.log(value);

        if(indx == 1)
          $scope.myYear = value;

        if(indx == 2)
          $scope.myMonth = value;

        if(indx == 3)
          $scope.myDay = value;

        for(var ind = 0; ind < arr.length; ind++)
        {
          if (arr[ind].checked != null && arr[ind].checked == true)
          {
            arr[ind].checked = false;
          }else {
            arr[ind].checked = true;
          }
        }

      }

      $scope.setTime = function(time){
        console.log(time);
        $scope.time = time;
      }

      $scope.url = {
        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
      }

      ///////////////////////////////////// NEW CALENDAR CODE ////////////////////////////////////////
      $scope.changeMode = function (mode) {
        $scope.mode = mode;
    };

    $scope.today = function () {
        $scope.currentDate = new Date();
    };

    $scope.isToday = function () {
        var today = new Date(),
            currentCalendarDate = new Date($scope.currentDate);

        today.setHours(0, 0, 0, 0);
        currentCalendarDate.setHours(0, 0, 0, 0);
        return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.loadEvents = function () {
        $scope.eventSource = createRandomEvents();
    };

    $scope.onEventSelected = function (event) {
        $scope.event = event;
    };

    $scope.onTimeSelected = function (selectedTime, events) {
        console.log('Selected time: ' + selectedTime + ' hasEvents: ' + (events !== undefined && events.length !== 0));
    };

    function createRandomEvents() {
        console.log("called");
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            //var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90);
            var endDay = startDay;
            var startTime;
            var endTime;

                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = 5 + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Booking for ' + $scope.departurePoint.name + ' -> ' + $scope.destinationPoint.name,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });

        }
        return events;
    }

    $scope.step = 1;

    $scope.nextStep = function(){
      $scope.step++;
    }

    $scope.prevStep = function(){
      $scope.step--;
    }

    $scope.goToPayments = function(){
      $location.path('/payments');
    }

}]);
