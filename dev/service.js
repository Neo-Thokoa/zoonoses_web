zoonosisModule.factory('ZoonosisService', ["$http", function ($http) {

    // this.helloWorld = function (){
    //     console.log("Hello");
    // };

    var factoryObj = {};
    var path = "./Json/";
    console.log("Service activated");
    factoryObj.getTattooClass = function () {
      console.log("Inside Tattoo class");
        return $http.get(path + 'tattoClassifications.json');
    }

    factoryObj.getDates = function () {
        return $http.get('datesAvailable.json');
    }

    factoryObj.getMusuemNum = function (){
      console.log("Inside Museum class");
      return $http.get(path + 'museumNumDB.json');
    }

    factoryObj.getCVZLabNums = function (){
      console.log("Inside CVZ class");
      return $http.get(path + 'cvzLabDB.json');
    }

    return factoryObj;
}]);
