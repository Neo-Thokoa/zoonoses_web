zoonosisModule.factory('ZoonosisService', ["$http", function ($http) {

    // this.helloWorld = function (){
    //     console.log("Hello");
    // };

    var factoryObj = {};
    var path = "./Json/";
    console.log("Service activated");
    factoryObj.getTattooClass = function () {
        return $http.get(path + 'tattoClassifications.json');
    }

    factoryObj.getDates = function () {
        return $http.get('datesAvailable.json');
    }

    factoryObj.getMusuemNum = function (){
      return $http.get(path + 'museumNumDB.json');
    }

    factoryObj.getCVZLabNums = function (){
      return $http.get(path + 'cvzLabDB.json');
    }

    factoryObj.getHost = function(){
      return $http.get(path + 'host.json');
    }

    factoryObj.getSpecies = function(){
      return $http.get(path + 'species.json');
    }

    factoryObj.getProvince = function(){
      return $http.get(path + 'province.json');
    }

    factoryObj.getCountry = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getLocality = function(){
      return $http.get(path + 'localityDB.json');
    }

    factoryObj.getSex = function(){
      console.log("Inside Sex");
      return $http.get(path + 'sexDB.json');
    }

    factoryObj.getAge = function(){
      return $http.get(path + 'ageDB.json');
    }

    factoryObj.getExistingTattoo = function()
    {
      return $http.get(path + 'tattooNums.json');
    }

    factoryObj.getBiospies = function()
    {
      return $http.get(path + 'biopsies.json');
    }

    return factoryObj;
}]);
