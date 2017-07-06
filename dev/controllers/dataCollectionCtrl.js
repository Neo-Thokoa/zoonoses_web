
zoonosisModule.controller("dataCollectionCtrl",
    ["$scope", "$http", "$location", "ZoonosisService", "$routeParams", "oiSelect",
    function ($scope, $location, $rootScope, ZoonosisService, $routeParams, rootScope, oiSelect, $http) {

      $scope.Btnloader = false;
      $scope.part1 = true;
        $scope.part2 = false;
        $scope.part3 = false;
        $scope.part4 = false;
        //$scope.version = oiSelect.version.full;

      //Error messages


          $rootScope.showSaver2 = true;
          $rootScope.showSaver = true;

          $scope.message = "Page 1/4 Add project information on this page.";
          $scope.feedColor = "#005bab";

          $scope.url = {

              templateUrl: "pages/navBar.html",
              controller: "homePageCtrl"
          }

          $scope.yesNo = [{ name: "Yes", value: 1 }, { name: "No", value: 0 }, { name: "-", value: null }];
          $scope.fieldSheetAns = $scope.yesNo[2];
          $scope.necropsySheetAns = $scope.yesNo[2];

          //variables
          ZoonosisService.getTattooClass().then(function (results){
             var data = results.data;
             $scope.data = data;
             console.log("Ayeye");
             console.log(data);
           },
           function(results){
          //   //on error
             console.log(results.status);
           });

           $scope.tattooChoices = [{name: "No", value : 0}, {name: "Yes", value : 1}, {name: "Yes Recaptured", value : 0}];
           $scope.usersTattoAns = $scope.yesNo[2];

           $scope.tattooFunc = function(){
             if($scope.usersTattoAns.value != 0)
             {
               //Has tattoo number recapture
               if($scope.usersTattoAns.value == 1)
               {

               }
               else
               {

               }
             }
           }

           //Project number
          $scope.otherProjNum = null;
          $scope.errorOPN = null;
          $scope.checkProjNum = function(){

          }

          //Meuseum number
          $scope.museumNum = null;
          $scope.currentMuseumNums = null;
          ZoonosisService.getMusuemNum().then(function (results){
             var data = results.data;
             $scope.currentMuseumNums = data;
             console.log("Ayeye");
             console.log(data);
           },
           function(results){
          //   //on error
             console.log(results.status);
           });






}]);
