
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
          $scope.availableSearchParams = [{ key: "name", name: "Name", placeholder: "Name..." },
  { key: "city", name: "City", placeholder: "City...", restrictToSuggestedValues: true, suggestedValues: ['Berlin', 'London', 'Paris'] },
  { key: "country", name: "Country", placeholder: "Country..." },
  { key: "emailAddress", name: "E-Mail", placeholder: "E-Mail...", allowMultiple: true },
  { key: "job", name: "Job", placeholder: "Job..." }];


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

               $scope.adminSelectionUpdater = function(){
                 console.log("Inside on item select");
                 console.log($scope.dbmodel);
               }

               $scope.message = "Manage lookup tables on this page. Select the table to manage from the various lists.";



}]);
