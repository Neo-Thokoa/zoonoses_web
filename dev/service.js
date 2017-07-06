zoonosisModule.factory('ZoonosisService', ["$http", function ($http) {

    var factoryObj = {};
    var path = "./Json";
    console.log("Service activated");
    factoryObj.getTattooClass = function () {
      console.log("Inside Tattoo class");
        return $http.get(path + 'tattoClassifications.json');
    }

    factoryObj.getDates = function () {
        return $http.get('datesAvailable.json');
    }

    factoryObj.helloWorld = function () {
        console.log("Hello");
    };


    return factoryObj;
}]);
