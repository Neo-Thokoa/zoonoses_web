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

    factoryObj.getHost = function(){
      console.log("Inside Host");
      return $http.get(path + 'host.json');
    }

    factoryObj.getSpecies = function(){
      console.log("Inside species");
      return $http.get(path + 'species.json');
    }

    factoryObj.getProvince = function(){
      console.log("Inside province");
      return $http.get(path + 'province.json');
    }

    factoryObj.getCountry = function(){
      console.log("Inside country");
      return $http.get(path + 'countries.json');
    }

    factoryObj.getLocality = function(){
      console.log("Inside Locality");
      return $http.get(path + 'localityDB.json');
    }

    return factoryObj;
}]);
