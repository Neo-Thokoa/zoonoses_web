
zoonosisModule.controller("dataCollectionCtrl",
    ["$scope", "$http", "$location", "ZoonosisService", "$routeParams", "oiSelect",
    function ($scope, $location, $rootScope, ZoonosisService, $routeParams, rootScope, oiSelect, $http) {

      $scope.Btnloader = false;
      $scope.part1 = true;
        $scope.part2 = false;
        $scope.part3 = false;
        $scope.part4 = false;
        //$scope.version = oiSelect.version.full;
      var page1Obj = new Object();
      var page2Obj = new Object();
      var page3Obj = new Object();
      var page4Obj = new Object();

      //Error messages


          $rootScope.showSaver2 = true;
          $rootScope.showSaver = true;

          $scope.message = "Page 1/4 Add project information on this page.";
          $scope.feedColor = "#68831e";

          $scope.url = {

              templateUrl: "pages/navBar.html",
              controller: "homePageCtrl"
          }

          $scope.cvzCurrentNum = null;
          ZoonosisService.getCVZLabNums().then(function(results){
            var cvzDB = results.data;
            console.log("CVZ Labatory Nums: ");
            cvzDB.currentCVZLabNums.sort();
            var genNum = cvzDB.currentCVZLabNums[cvzDB.currentCVZLabNums.length - 1] + 1;
            $scope.cvzCurrentNum = cvzDB.prefix + genNum;
            console.log($scope.cvzCurrentNum);

          },
          function(results){
         //   //on error
            console.log(results.status);
          });

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
             $scope.currentMuseumNums = data.currentDBMuseumNum;
             console.log("museum Num");
             console.log(data);

             $scope.currentMuseumNums.sort();
             var shoBoy = $scope.currentMuseumNums[$scope.currentMuseumNums.length - 1] + 1;
             $scope.museumNum = data.prefix + shoBoy;
             console.log($scope.museumNum);
           },
           function(results){
          //   //on error
             console.log(results.status);
           });

           //Experimental Colony
           $scope.requiredYesNo = [{ name: "Yes", value: 1 }, { name: "No", value: 0 }];
           $scope.experiColonAns = null;

           $scope.savePage1 = function () {
            $scope.Btnloader = true
            page1Obj.CVZ_LAB_NUM = $scope.cvzCurrentNum;
            page1Obj.FIELD_SHEET = $scope.fieldSheetAns;
            page1Obj.NECROPSY_SHEET = $scope.necropsySheetAns;
            page1Obj.TATTOO_NUM = $scope.usersTattoAns;
            page1Obj.OTHER_PROJECT_NUM = $scope.otherProjNum;
            page1Obj.MUSEUM_NUMBER = $scope.museumNum;
            page1Obj.EXPERIMENTAL_COLONY = $scope.experiColonAns;

            }

            $scope.NextPart = function (pn) {
            if (pn == 2) {
              //  console.log("here");
                $scope.part1 = false;
                $scope.part2 = true;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.message = "Page 2/4 Description of sample.";
                $scope.feedColor = "#68831e";
            }
            else if (pn == 3) {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = true;
                $scope.message = "Page 2/4 Manage Divisions on this page. Click add to add a Division.";
                $scope.feedColor = "#68831e";
            }
            else if (pn == 4) {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = true;
                $scope.part4 = false;
                $scope.message = "Page 4/4 Manage staff on this page. Click add to add a staff member.";
                $scope.feedColor = "#68831e";
            }
            else {
                $scope.part1 = true;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.message = "Page 1/4 Edit project information on this page.";
                $scope.feedColor = "#68831e";
            }

        }

        $scope.Back = function (pn) {
            if (pn == 1) {
                $scope.part1 = true;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.message = "Page 1/4 Add project information on this page.";
                $scope.feedColor = "#005bab";
            }
            else if (pn == 2) {
                $scope.part1 = false;
                $scope.part2 = true;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.message = "Page 3/4 Manage collaborators on this page. Click add to add a collaborator.";
                $scope.feedColor = "#68831e";
            }
            else if (pn == 3) {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = true;
                $scope.part4 = false;
                $scope.message = "Page 4/4 Manage staff on this page. Click add to add a staff member.";
                $scope.feedColor = "#68831e";
            }
            else if (pn == 4) {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = true;
                $scope.message = "Page 2/4 Manage Divisions on this page. Click add to add a Division.";
                $scope.feedColor = "#68831e";
            }
            else {
                $scope.part1 = true;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.message = "Page 1/4 Add project information on this page.";
                $scope.feedColor = "#68831e";
            }
        }



}]);
