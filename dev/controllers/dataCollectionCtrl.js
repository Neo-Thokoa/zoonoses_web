function Model() {
    this.divisiontype = null;
    this.divisionName = null;
    this.disable = false;
}
function Model2() {
    this.funding = null;
    this.ProjectAmount = null;
    //this.fundingsArr = null;
    this.disable = false;
}
function Model3() {
    this.Question = null;
    this.Answer = null;
}
function Model4() {
    this.active = true;
    this.dateMessage = null;
    this.Collaborator = null;
    this.DateFrom = null;
    this.DateTo = null;
    this.Subject = null;
    this.InvalidDates = null;
    this.Keyword = null;
    this.ProjectRole = null;
    this.ColaborationStatus = null;
    this.ColaborationType = null;
    this.CollaboratorsArr = null;
}

function Model5() {
    this.active = true;
    this.Staff = null;
    this.DateFrom = null;
    this.DateTo = null;
    this.Subject = null;
    this.InvalidDates = null;
    this.Keyword = null;
    this.ProjectRole = null;
    this.ColaborationStatus = null;
    this.ColaborationType = null;
    this.StaffsArr = null;
}

zoonosisModule.controller("dataCollectionCtrl",
    ["$scope", "$location", "ZoonosisService", "$routeParams", "oiSelect",
    function ($scope, $location, $rootScope, ZoonosisService, $routeParams, rootScope, oiSelect) {

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

          console.log(ZoonosisService.helloWorld());
          //variables
          ZoonosisService.getTattooClass().then(function (results){
            var data = results.data;
            $scope.data = data;
            console.log("Ayeye");
            console.log(data);
          },
          function(results){
            //on error
            console.log(results.status);
          });
          //get all tables in one server call

          // zoonosisService.getDates("./Json").then(function (results) {
          //     //on success
          //     var data = results.data;
          //     $scope.data = results.data;
          //     newObject(data.list);
          //   });




}]);
