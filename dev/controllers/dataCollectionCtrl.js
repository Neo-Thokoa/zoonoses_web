
zoonosisModule.controller("dataCollectionCtrl",
    ["$scope", "$http", "$location", "ZoonosisService", "$routeParams", "oiSelect",
    function ($scope, $location, $rootScope, ZoonosisService, $routeParams, rootScope, oiSelect, $http) {

      $scope.Btnloader = false;
      $scope.part1 = true;
        $scope.part2 = false;
        $scope.part3 = false;
        $scope.part4 = false;
        $scope.part5 = false;
        $scope.part6 = false;
        $scope.viewPage = 1;
        //$scope.version = oiSelect.version.full;
      var page1Obj = new Object();
      var page2Obj = new Object();
      var page3Obj = new Object();
      var page4Obj = new Object();

      //Progress Bar
      $scope.max = 100;
      $scope.dynamic = null;
      $scope.type = null;

      $scope.initializeBar = function()
      {
        var value = 1;
        var type = "danger"
        $scope.dynamic = value;
        $scope.type = type;
      };

      $scope.initializeBar();

      $scope.incrementBar = function(addPercent)
      {
        $scope.dynamic += addPercent;
        if($scope.dynamic < 25)
        {
          $scope.type = "danger";
        }
        else if($scope.dynamic < 50)
        {
          $scope.type = "warning";
        }
        else
        {
          $scope.type = "sucess";
        }
      };

          $scope.isIncrement = function(checker, val)
          {
            if(!checker)
            {
              checker = true;
              $scope.incrementBar(val);
            }
          }

          //Page
          $scope.totalItems = 60;
          $scope.maxSize = 7;
          $scope.currentPage = 1;
          $scope.setPage = function (pageNo) {
            console.log("Hau");
            // if(pageNo < $scope.currentPage)
            // {
            //   $scope.Back(pageNo)
            // }
            // else
            // {
            //   $scope.NextPart(pageNo);
            // }
            //$scope.currentPage = pageNo;
          };

          $scope.pageChanged = function()
          {
            console.log("Page: " + $scope.currentPage);
            if($scope.currentPage < $scope.viewPage)
            {
              $scope.viewPage = $scope.currentPage;
              $scope.Back($scope.viewPage);
            }
            else if($scope.currentPage > $scope.viewPage)
            {
              $scope.viewPage = $scope.currentPage;
              $scope.NextPart($scope.viewPage);
            }
          }

          $rootScope.showSaver2 = true;
          $rootScope.showSaver = true;

          $scope.message = "Page 1/6 Sample information.";
          $scope.feedColor = "#68831e";

          $scope.url = {

              templateUrl: "pages/navBar.html",
              controller: "homePageCtrl"
          }

          //1 Tattoo
          $scope.recaptureTattoo = null;
          $scope.isTattoo = false;
          ZoonosisService.getTattooClass().then(function (results){
             var data = results.data;
             $scope.data = data;
           },
           function(results){
          //   //on error
             console.log(results.status);
           });

           $scope.tattooChoices = [{name: "No", value : 0}, {name: "Yes", value : 1}];
           $scope.usersTattoAns = null;
           $scope.tattooIncrease = false;

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
                  $scope.cvzCurrentNum =  $scope.principleCVZNum;

             }
             if(!$scope.tattooIncrease)
             {
               $scope.tattooIncrease = true;
               $scope.incrementBar(3);
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



          //variables



            //2 Cvz Number
            $scope.cvzCurrentNum = null;
            $scope.principleCVZNum = null;
            ZoonosisService.getCVZLabNums().then(function(results){
              var cvzDB = results.data;
              console.log("CVZ Labatory Nums: ");
              cvzDB.currentCVZLabNums.sort();
              var genNum = cvzDB.currentCVZLabNums[cvzDB.currentCVZLabNums.length - 1] + 1;
              $scope.cvzCurrentNum = cvzDB.prefix + genNum;
              $scope.principleCVZNum = $scope.cvzCurrentNum;
              console.log($scope.cvzCurrentNum);

            },
            function(results){
           //   //on error
              console.log(results.status);
            });

            //3 and 4 Field and Necropsy Sheet
            $scope.sheetIncrease = false;
            $scope.yesNo = [{ name: "Yes", value: 1 }, { name: "No", value: 0 }, { name: "-", value: null }];
            $scope.realOptions = [{name: "Yes", value:1}, {name: "No", value: 0}];
            $scope.fieldSheetAns = $scope.yesNo[2];
            $scope.necropsySheetAns = $scope.yesNo[2];


           //Project number
          $scope.otherProjNum = null;
          $scope.errorOPN = null;
          $scope.errorProjNum = false;
          $scope.otherProIncrease = false;
          $scope.checkProjNum = function()
          {
            if(!$scope.otherProIncrease)
            {
              $scope.incrementBar(1);
              $scope.otherProIncrease = true;
            }
          }



           //Experimental Colony
           $scope.requiredYesNo = [{ name: "Yes", value: true }, { name: "No", value: false }];
           $scope.experiColonAns = null;
           $scope.colonyIncrease = false;
           $scope.checkColony = function()
           {
             if(!$scope.colonyIncrease)
             {
               $scope.colonyIncrease = true;
               $scope.incrementBar(1);
             }
           };

           //Page 1 continue stuff
           $scope.currentSource = null;
           $scope.currentHost = null;
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
           $scope.SHIncreaseing = false;
           $scope.isHost = false;
           $scope.isSource = false;
           $scope.isOtherHost = false;
           $scope.choosenHSType = null;
           $scope.hostOptions = null;
           $scope.otherOptions = null;
           $scope.sourceOptions = null;
           ZoonosisService.getHost().then(function (results){
              var data = results.data;
              $scope.hostSourceOption = ["Source", "Host"];
              $scope.hostOptions = data.host.types;
              $scope.otherOptions = data.host.otherTypes;
              $scope.sourceOptions = data.source.types;
              console.log(data);


            },
            function(results){
           //   //on error
              console.log(results.status);
            });
            $scope.sourceinc = false;
            $scope.checkHost = function()
            {
              if($scope.currentHost == "Other")
              {
                $scope.isOtherHost = true;
              }
              else
              {
                $scope.isOtherHost = false;
              }
              if(!$scope.SHIncreaseing)
              {
                $scope.SHIncreaseing = true;
                $scope.incrementBar(1);
              }
            }

            $scope.checkHSType = function()
            {
              if($scope.choosenHSType == "Host")
              {
                $scope.isHost = true;
                $scope.isSource = false;
              }
              else
              {
                $scope.isHost = false;
                $scope.isSource = true;
              }
              if(!$scope.SHIncreaseing)
              {
                $scope.SHIncreaseing = true;
                $scope.incrementBar(1);
              }
            }

            $scope.onSourceSelect = function($item, $model, $label)
            {
              if(!$scope.sourceinc)
              {
                $scope.sourceinc = true;
                $scope.incrementBar(1);
              }
            };





           //Date collected
           $scope.dt = null;
           $scope.DateIncreaseing = false;
           $scope.today = function() {
             $scope.dt = new Date();
           };
           $scope.today();
           $scope.clear = function() {
              $scope.dt = null;
            };

            $scope.inlineOptions = {
              customClass: getDayClass,
              minDate: new Date(),
              showWeeks: true
            };

            $scope.dateOptions = {
              formatYear: 'yy',
              maxDate: new Date(2020, 5, 22),
              minDate: new Date(),
              startingDay: 1
            };

            $scope.toggleMin = function() {
             $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
             $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
           };

           $scope.toggleMin();

           $scope.open1 = function() {
             $scope.popup1.opened = true;
           };

           $scope.setDate = function(year, month, day) {
             $scope.dt = new Date(year, month, day);
             if(!$scope.DateIncreaseing)
             {
               $scope.DateIncreaseing = true;
               $scope.incrementBar(1);
             }
           };

           $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd-MM-yyyy', 'shortDate'];
           $scope.format = $scope.formats[2];
           $scope.altInputFormats = ['M!/d!/yyyy'];

           $scope.popup1 = {
             opened: false
           };

           function getDayClass(data) {
            var date = data.date,
              mode = data.mode;
            if (mode === 'day') {
              var dayToCheck = new Date(date).setHours(0,0,0,0);

              for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                  return $scope.events[i].status;
                }
              }
            }

            return '';
          }






           //Species
           $scope.speciesIncrease = false;
           $scope.speciesTypes = null;
           ZoonosisService.getSpecies().then(function (results){
              var data = results.data;
              $scope.speciesTypes = data.name;


            },
            function(results){
           //   //on error
              console.log(results.status);
            });

            $scope.checkSpecies = function()
            {
              if(!$scope.speciesIncrease)
              {
                $scope.speciesIncrease = true;
                $scope.incrementBar(1);
              }
            }


           //Confirmation of species Identification
           $scope.conformIDIncrease = false;
           $scope.speciesIDoptions = ["Morphological", "Barcoding (Cytochrome b)", "Barcoding (Cytochrome c oxidase I)"];
           $scope.checkIdoptions = function()
           {
             if(!$scope.conformIDIncrease)
             {
               $scope.conformIDIncrease = true;
               $scope.incrementBar(1);
             }
           }


           //Locality
           $scope.localIncrease = false;
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

            $scope.checkLocality = function()
            {
              $scope.isIncrement($scope.localIncrease, 3);
            }

            $scope.onSelect = function ($item, $model, $label) {
              console.log("Inside onSelect");
              console.log($item);
              $scope.siteList = $item.situated.Sites;
              $scope.currentCountry = {country:$item.situated.Country};


              $scope.currentLattitude = $item.situated.Dec_S;
              $scope.currentLongitude = $item.situated.Dec_E;
              $scope.isIncrement($scope.localIncrease, 3);
            };


           //Site
           $scope.siteList = null;

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
          $scope.collectorsList = ["CVZ (Center for Viral Zoonoses)"];


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

           //COMMENTS
           $scope.currentComment = null;

           //Meuseum number
           $scope.museumNum = null;
           $scope.principleMuseumNum = null;
           $scope.currentMuseumNums = null;
           $scope.hasMuseumNum = null;
           $scope.containsMuseumNum = false;
           $scope.modelList = [{
             select: false,
             Name: "Exists",
             value: "exists"
           },
            {
              select : false,
              Name: "Assign",
              value: "assign"
            },
            {
              select: false,
              Name: "Does Not Exist",
              value: "DNE"
            }];
           ZoonosisService.getMusuemNum().then(function (results){
              var data = results.data;
              $scope.currentMuseumNums = data.currentDBMuseumNum;
              console.log("museum Num");
              console.log($scope.currentMuseumNums);

              $scope.currentMuseumNums.sort();
              var shoBoy = $scope.currentMuseumNums[$scope.currentMuseumNums.length - 1] + 1;
              $scope.principleMuseumNum = data.prefix + shoBoy;
              for(var y = 0; y < $scope.currentMuseumNums.length; y++)
              {
                $scope.currentMuseumNums[y] = data.prefix + $scope.currentMuseumNums[y];
              }
              //console.log($scope.museumNum);
            },
            function(results){
           //   //on error
              console.log(results.status);
            });

            $scope.checkMuseum = function()
            {
              if($scope.hasMuseumNum.value == "exists")
              {
                $scope.museumNum = null;
              }
              else if($scope.hasMuseumNum.value == "assign")
              {
                $scope.museumNum = $scope.principleMuseumNum;
              }
              else
              {
                $scope.museumNum = null;
              }
            }

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
            $scope.Btnloader = true;

            page1Obj.TATTOO_NUM = $scope.recaptureTattoo;

            page1Obj.CVZ_LAB_NUM = $scope.cvzCurrentNum;

            if($scope.fieldSheetAns.value == null)
            {
              page1Obj.FIELD_SHEET = $scope.yesNo[1].name;
            }
            else
            {
              page1Obj.FIELD_SHEET = $scope.fieldSheetAns.name;
            }
            if($scope.necropsySheetAns.value == null)
            {
              page1Obj.NECROPSY_SHEET = $scope.yesNo[1].name;
            }
            else
            {
              page1Obj.NECROPSY_SHEET = $scope.necropsySheetAns.name;
            }
            if(!$scope.sheetIncrease)
            {
              $scope.incrementBar(2);
              $scope.sheetIncrease = true;
            }




            page1Obj.OTHER_PROJECT_NUM = $scope.otherProjNum;
            if(!$scope.otherProIncrease)
            {
              $scope.incrementBar(1);
            }

            page1Obj.EXPERIMENTAL_COLONY = $scope.experiColonAns.value;
            if(!$scope.colonyIncrease)
            {
              $scope.colonyIncrease = true;
              $scope.incrementBar(1);
            }

            page1Obj.SOURCE = $scope.currentSource;
            if(!$scope.SHIncreaseing)
            {
              $scope.SHIncreaseing = true;
              $scope.incrementBar(1);
            }

            page1Obj.DATE_COLLECTED = $scope.dt;
            if(!$scope.DateIncreaseing)
            {
              $scope.DateIncreaseing = true;
              $scope.incrementBar(1);
            }

            page1Obj.SPECIES = $scope.currentSpecies;

            page1Obj.CONFIRM_SPEC_ID = $scope.confirmation;
            page1Obj.LOCALITY = $scope.currentLocality;
            page1Obj.SITE = $scope.currentSite;
            page1Obj.PROVINCE = $scope.currentProvince;
            page1Obj.COUNTRY = $scope.currentCountry;
            page1Obj.DECS = $scope.currentLattitude;
            page1Obj.DECE = $scope.currentLongitude;
            page1Obj.COLLECTORS = $scope.currentCollectors;
            page1Obj.SEX = $scope.currentSex;
            page1Obj.AGE = $scope.currentAge;


            page1Obj.COMMENTS = $scope.currentComment;
            page1Obj.MUSEUM_NUMBER = $scope.museumNum;

            }

             $scope.savePage2 = function () {
              $scope.Btnloader = true
              page2Obj.ISVOUCHER = null;
              page2Obj.WINGBIOPSY = null;
              page2Obj.BLOOD = null;
              page2Obj.SERUM = null;
              page2Obj.FTABLOOD = null;
              page2Obj.FUR = null;
              page2Obj.PARASITE = null;
              page2Obj.PARINETOH = null;
              page2Obj.URINE = null;
              page2Obj.FEACAL = null;
              page2Obj.NA_SWAB = null;
              page2Obj.RE_SWAB = null;
              page2Obj.ORAL_SWAP = null;

              }

            $scope.NextPart = function (pn) {
            if (pn == 2) {
              //  console.log("here");
                $scope.part1 = false;
                $scope.part2 = true;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.part5 = false;
                $scope.part6 = false;
                $scope.message = "Page 2/6 Biopsy details.";
                $scope.feedColor = "#68831e";
                $scope.Btnloader = false;

            }
            else if (pn == 3) {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = true;
                $scope.part4 = false;
                $scope.part5 = false;
                $scope.part6 = false;
                $scope.message = "Page 3/6 Manage Test details.";
                $scope.feedColor = "#68831e";
                $scope.Btnloader = false;
            }
            else if (pn == 4) {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = true;
                $scope.part5 = false;
                $scope.part6 = false;
                $scope.message = "Page 4/6 Manage Measurements from tests";
                $scope.feedColor = "#68831e";
                $scope.Btnloader = false;
            }
            else if (pn == 5) {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.part5 = true;
                $scope.part6 = false;
                $scope.message = "Page 5/6 Manage Photos";
                $scope.feedColor = "#68831e";

            }
            else {
                $scope.part1 = false;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.part5 = false;
                $scope.part6 = true;
                $scope.message = "Page 6/6 Manage Publications and Additionals.";
                $scope.feedColor = "#68831e";
            }
                //$scope.setPage(pn);
            $scope.Btnloader = false;

        }

        $scope.Back = function (pn) {
            if (pn == 1) {
                $scope.part1 = true;
                $scope.part2 = false;
                $scope.part3 = false;
                $scope.part4 = false;
                $scope.part5 = false;
                $scope.part6 = false;
                $scope.message = "Page 1/6 Sample information.";
                $scope.feedColor = "#005bab";
            }
            else if (pn == 2) {
              $scope.part1 = false;
              $scope.part2 = true;
              $scope.part3 = false;
              $scope.part4 = false;
              $scope.part5 = false;
              $scope.part6 = false;
              $scope.message = "Page 2/6 Biopsy details.";
              $scope.feedColor = "#68831e";
              $scope.Btnloader = false;
            }
            else if (pn == 3) {
              $scope.part1 = false;
              $scope.part2 = false;
              $scope.part3 = true;
              $scope.part4 = false;
              $scope.part5 = false;
              $scope.part6 = false;
              $scope.message = "Page 3/6 Manage Test details.";
              $scope.feedColor = "#68831e";
              $scope.Btnloader = false;
            }
            else if (pn == 4) {
              $scope.part1 = false;
              $scope.part2 = false;
              $scope.part3 = false;
              $scope.part4 = true;
              $scope.part5 = false;
              $scope.part6 = false;
              $scope.message = "Page 4/6 Manage Measurements from tests";
              $scope.feedColor = "#68831e";
              $scope.Btnloader = false;
            }
            else {
              $scope.part1 = false;
              $scope.part2 = false;
              $scope.part3 = false;
              $scope.part4 = false;
              $scope.part5 = true;
              $scope.part6 = false;
              $scope.message = "Page 5/6 Manage Photos";
              $scope.feedColor = "#68831e";
            }
              //$scope.setPage(pn);
        }



}]);
