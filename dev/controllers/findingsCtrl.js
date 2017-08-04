
zoonosisModule.controller("findingsCtrl",
    ["$scope", "$http", "$location", "ZoonosisService", "$routeParams", "oiSelect",
    function ($scope, $location, $rootScope, ZoonosisService, $routeParams, rootScope, oiSelect, $http) {
          $scope.isAdmin = "false";
          $scope.loader = true;
          console.log($scope.isAdmin);


          $scope.url = {

              templateUrl: "pages/navBar.html",
              controller: "homePageCtrl"
          }


          $scope.searchParams = null;
  //         $scope.availableSearchParams = [{ key: "name", name: "Name", placeholder: "Name..." },
  // { key: "city", name: "City", placeholder: "City...", restrictToSuggestedValues: true, suggestedValues: ['Berlin', 'London', 'Paris'] },
  // { key: "country", name: "Country", placeholder: "Country..." },
  // { key: "emailAddress", name: "E-Mail", placeholder: "E-Mail...", allowMultiple: true },
  // { key: "job", name: "Job", placeholder: "Job..." }];


              //$scope.setPage(pn);
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

              //Get DB List
              $scope.dbmodel = [];
              console.log($scope.dbmodel.length);
              $scope.example9data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];
              $scope.example9settings = {enableSearch: true, showSelectAll: true, keyboardControls: true, checkBoxes: true, scrollable: true};

              $scope.getAdminData = null;
               ZoonosisService.getDBList().then(function(results){
                 var data = results.data;
                 $scope.getAdminData = data;
               }, function(results){
                 console.log("Get Admin status");
                 console.log(results.status);
               });

               $scope.functionCalls = null;
               ZoonosisService.getAdminData().then(function(results){
                 var data = results.data;
                 $scope.functionCalls = data;
               }, function(results){
                 console.log("Get Admin status");
                 console.log(results.status);
               });

               $scope.adminOptionBoxEvents = {
                    onItemSelect : function(item){
                        console.log("Inside on item select");
                        console.log(item);

                    },
                    onItemDeselect : function(item){
                      console.log(item);
                    },
                    onSelectAll : function(){

                    }

               };

               $scope.selectedAdminFunction = [];

               $scope.adminSelectionUpdater = function(){
                 console.log("Inside on item select");

                 var deny = this.dbmodel;
                $scope.selectedAdminFunction =  $scope.functionCalls.filter(function(funcIndex){

                    return funcIndex.ID == deny.ID;
                });
                eval($scope.selectedAdminFunction[0].fnCall);
               }

               $scope.message = "Manage lookup tables on this page. Select the table to manage from the various lists.";




               $scope.userSelection = [];
               $scope.getAge = function(){
                 ZoonosisService.getAge().then(function (results){
                    var data = results.data;
                    $scope.userSelection = data;
                    console.log(data);
                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getAnimal = function(){
                 ZoonosisService.getAnimal().then(function (results){
                   console.log("Got animal boy");
                    var data = results.data;
                    $scope.userSelection = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getArea = function(){
                 ZoonosisService.getArea().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getBox = function(){
                 ZoonosisService.getBox().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getCell = function(){
                 ZoonosisService.getCell().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }


               $scope.getCountry = function(){
                 ZoonosisService.getCountry().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getDeathVoucher = function(){
                 ZoonosisService.getDeathVoucher().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getDrawer = function(){
                 ZoonosisService.getDrawer().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getEntity = function(){
                 ZoonosisService.getEntity().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getEntityType = function(){
                 ZoonosisService.getEntityType().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }


               $scope.getFreezer = function(){
                 ZoonosisService.getFreezer().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getFunction = function(){
                 ZoonosisService.getFunction().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getIDMethod = function(){
                 ZoonosisService.getIDMethod().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getLocalRegion = function(){
                 ZoonosisService.getLocalRegion().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getMaterial = function(){
                 ZoonosisService.getMaterial().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getMuseum = function(){
                 ZoonosisService.getMuseum().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getMuseumVoucher = function(){
                 ZoonosisService.getMuseumVoucher().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getOrigin = function(){
                 ZoonosisService.getOrigin().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getPhoto = function(){
                 ZoonosisService.getPhoto().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getPublication = function(){
                 ZoonosisService.getPublication().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getRegion = function(){
                 ZoonosisService.getRegion().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getRole = function(){
                 ZoonosisService.getRole().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getSample = function(){
                 ZoonosisService.getSample().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getSex = function(){
                 ZoonosisService.getSex().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  })
               }

               $scope.getSite = function(){
                 ZoonosisService.getSite().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }

               $scope.getSpecies = function(){
                 ZoonosisService.getSpecies().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  })
               }

               $scope.getTest = function(){
                 ZoonosisService.getTest().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  })

               }

               $scope.getTitle = function(){
                 ZoonosisService.getTitle().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });

               }

               $scope.getUser = function(){
                 ZoonosisService.getUser().then(function (results){
                    var data = results.data;
                    $scope.sexOptions = data;
                    console.log(data);

                  },
                  function(results){
                    console.log(results.status);
                  });
               }



}]);
