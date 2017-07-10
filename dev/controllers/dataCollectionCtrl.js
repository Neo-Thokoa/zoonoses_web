
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

          $scope.message = "Page 1/7 Identification.";
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

          $scope.recaptureTattoo = null;

          $scope.yesNo = [{ name: "Yes", value: 1 }, { name: "No", value: 0 }, { name: "-", value: null }];
          $scope.fieldSheetAns = $scope.yesNo[2];
          $scope.necropsySheetAns = $scope.yesNo[2];

          //variables
          $scope.isTattoo = false;
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

           $scope.tattooChoices = [{name: "No", value : 0}, {name: "Yes", value : 1}];
           $scope.usersTattoAns = null;

           $scope.tattooFunc = function()
           {
             $scope.cvzCurrentNum = $scope.recaptureTattoo.CVZLabNum;

           }

           $scope.updateTattooValidation = function(){
             if($scope.usersTattoAns.name == "Yes")
             {
               $scope.isTattoo = true;
             }
             else
             {
               $scope.isTattoo = false;

             }
           }

           $scope.currentTattoos = null
           ZoonosisService.getExistingTattoo().then(function (results){
              $scope.currentTattoos = results.data;

            },
            function(results){
           //   //on error
              console.log(results.status);
            });


           //Project number
          $scope.otherProjNum = null;
          $scope.errorOPN = null;
          $scope.checkProjNum = function(){

          }

          //Meuseum number
          $scope.museumNum = null;
          $scope.currentMuseumNums = null;
          $scope.isMuseum = true;
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

           //Page 1 continue stuff
           $scope.currentSource = null;
           $scope.datepicked = null;
           $scope.currentSpecies = null;
           $scope.confirmation = null;
           $scope.currentLocality = null;
           $scope.currentSite = null;
           $scope.currentProvince = null;
           $scope.currentCountry = null;
           $scope.currentLattitude = null;
           $scope.currentLongitude = null;
           $scope.currentCollectors = null;
           $scope.currentSex = null;
           $scope.currentAge = null;

           //Source / Host
           $scope.hostOptions = null;
           $scope.otherOptions = null;
           $scope.sourceOptions = null;
           ZoonosisService.getHost().then(function (results){
              var data = results.data;
              $scope.hostOptions = data.host.types;
              $scope.otherOptions = data.host.otherTypes;
              $scope.sourceOptions = data.source.types;
              console.log(data);


            },
            function(results){
           //   //on error
              console.log(results.status);
            });


           //Date collected



           //Species
           $scope.speciesTypes = null;
           ZoonosisService.getSpecies().then(function (results){
              var data = results.data;
              $scope.speciesTypes = data.name;


            },
            function(results){
           //   //on error
              console.log(results.status);
            });


           //Confirmation of species Identification
           $scope.speciesIDoptions = ["Morphological", "Barcoding (Cytochrome b)", "Barcoding (Cytochrome c oxidase I)"];



           //Locality
           $scope.localDB = null;
           ZoonosisService.getLocality().then(function (results){
              var data = results.data;
              $scope.localDB = data;
              console.log("Locality return");
              console.log($scope.localDB);
            },
            function(results){
           //   //on error
              console.log(results.status);
            });

            $scope.checkSelection = function()
            {
              var isFound = false;
              for(var x = 0; x < $scope.localDB.length; x++)
              {
                if($scope.currentLocality == $scope.localDB[x].value)
                {
                  console.log("Yeah");
                  isFound = true;
                  $scope.currentCountry = $scope.localDB[x].situated.Country;
                  console.log($scope.currentCountry);
                }


              }



            }


           //Site

           //  Country
           $scope.countryList = null;
            $scope.isSouthAfrica = false;
           ZoonosisService.getCountry().then(function (results){
              var data = results.data;
              $scope.countryList = data;
              //console.log(data);

            },
            function(results){
           //   //on error
              console.log(results.status);
            });

            $scope.checkIfSA = function()
            {
              if($scope.currentCountry.country == "South Africa")
              {
                console.log("is SA");
                $scope.isSouthAfrica = true;
                $scope.currentProvince = null;
              }
              else {
                console.log("Not");
                console.log($scope.currentCountry.country);
                $scope.isSouthAfrica = false;
                $scope.currentProvince = null;
              }
            }


           //Province

           $scope.provinceList = null;
           ZoonosisService.getProvince().then(function (results){
              var data = results.data;
              $scope.provinceList = data;


            },
            function(results){
           //   //on error
              console.log(results.status);
            });


          //Lattitude and longitude



          //Collectors



          //SEX
          $scope.sexOptions = null;
          ZoonosisService.getSex().then(function (results){
             var data = results.data;
             $scope.sexOptions = data;
             console.log(data);

           },
           function(results){
          //   //on error
             console.log(results.status);
           });

          //AGE
          $scope.ageOptions = null;
          ZoonosisService.getAge().then(function (results){
             var data = results.data;
             $scope.ageOptions = data;
             console.log(data);

           },
           function(results){
          //   //on error
             console.log(results.status);
           });

           //Page 3
           $scope.diedBefore = false;
           $scope.wasDead = false;
           $scope.diedAfter = false;
           $scope.euthanised = false;

           $scope.trueFalse = [{name : "Yes (Y)", value : true}, {name : "No (N)", value : false}];
           $scope.checkSomething = function()
           {
             console.log($scope.wasDead);
           }

           //End of page 3

           $scope.savePage1 = function () {
            $scope.Btnloader = true
            page1Obj.CVZ_LAB_NUM = $scope.cvzCurrentNum;
            page1Obj.FIELD_SHEET = $scope.fieldSheetAns;
            page1Obj.NECROPSY_SHEET = $scope.necropsySheetAns;
            page1Obj.TATTOO_NUM = $scope.recaptureTattoo;
            page1Obj.OTHER_PROJECT_NUM = $scope.otherProjNum;
            page1Obj.MUSEUM_NUMBER = $scope.museumNum;
            page1Obj.EXPERIMENTAL_COLONY = $scope.experiColonAns;

            }

             $scope.savePage2 = function () {
              $scope.Btnloader = true
              page2Obj.SOURCE = $scope.currentSource;
              page2Obj.DATE_COLLECTED = $scope.datepicked;
              page2Obj.SPECIES = $scope.currentSpecies;
              page2Obj.CONFIRM_SPEC_ID = $scope.confirmation;
              page2Obj.LOCALITY = $scope.currentLocality;
              page2Obj.SITE = $scope.currentSite;
              page2Obj.PROVINCE = $scope.currentProvince;
              page2Obj.COUNTRY = $scope.currentCountry;
              page2Obj.DECS = $scope.currentLattitude;
              page2Obj.DECE = $scope.currentLongitude;
              page2Obj.COLLECTORS = $scope.currentCollectors;
              page2Obj.SEX = $scope.currentSex;
              page2Obj.AGE = $scope.currentAge;

              }

            $scope.NextPart = function (pn) {
            if (pn == 2) {
              //  console.log("here");
                $scope.part1 = false;
                $scope.part2 = true;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.message = "Page 2/7 Description of sample.";
                $scope.feedColor = "#68831e";
                $scope.Btnloader = false;
            }
            else if (pn == 3) {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = true;
                $scope.part4 = false;
                $scope.message = "Page 3/7 Manage Voucher details.";
                $scope.feedColor = "#68831e";
                $scope.Btnloader = false;
            }
            else if (pn == 4) {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = true;
                $scope.message = "Page 4/4 Manage staff on this page. Click add to add a staff member.";
                $scope.feedColor = "#68831e";
                $scope.Btnloader = false;
            }
            else {
                $scope.part1 = true;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.message = "Page 1/4 Edit project information on this page.";
                $scope.feedColor = "#68831e";
            }

            $scope.Btnloader = false;

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
