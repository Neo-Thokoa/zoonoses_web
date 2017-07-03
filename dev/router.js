var zoonosisModule = angular.module('zoonosisModule', ['ngRoute','leaflet-directive','oi.select','datepicker', 'ui.rCalendar']);

zoonosisModule.config(["$routeProvider", function($routeProvider) {

    $routeProvider
   .when("/", {
       templateUrl: "pages/homePage.html",
       controller: "homePageCtrl"
   })
   .when("/dataCollection", {
       templateUrl: "pages/dataCollection.html",
       controller: "dataCollectionCtrl"
   })
   .when("/dataCollection/:id", {
       templateUrl: "pages/dataCollection.html",
       controller: "dataCollectionCtrl"
   })
   .when("/measurements", {
       templateUrl: "pages/measurements.html",
       controller: "measurementsCtrl"
   })
   .when("/promotions", {
       templateUrl: "pages/promotions.html",
       controller: "promotionsCtrl"
   })
   .when("/findings", {
       templateUrl: "pages/findings.html",
       controller: "findingsCtrl"
   })
   .when("/navbar", {
       templateUrl: "pages/navBar.html",
       controller: "navCtrl"
   })
    .otherwise({
      redirectTo: "/"
  });

}]);
