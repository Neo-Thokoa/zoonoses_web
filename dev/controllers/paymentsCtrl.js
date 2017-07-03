transluxModule.controller("paymentsCtrl",
    ["$scope", "$location", "transluxService",
    function ($scope, $location, transluxService) {

    $scope.mes = "WORKIDN?"
    $scope.titles = [{name:"Mr"}, {name:"Ms"}, {name:"Prof"}, {name:"Doctor"}];
    $scope.discount = [{name: "Pentioner"}, {name: "Child"}, {name: "Student"}];
    $scope.bank = [{name: "First National Bank"}, {name: "ABSA"}, {name: "Standard Bank"}, {name: "NedBank"}, {name: "Capitec Bank"}];


    $scope.show = 1;
    $scope.setShow = function(num){
      $scope.show = num;
    }

          $scope.url = {
        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
        }

      $scope.goHome = function(){
        $location.path('/');
      }

}]);
