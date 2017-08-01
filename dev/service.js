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



    factoryObj.getProvince = function(){
      return $http.get(path + 'province.json');
    }



    factoryObj.getLocality = function(){
      return $http.get(path + 'localityDB.json');
    }





    factoryObj.getExistingTattoo = function()
    {
      return $http.get(path + 'tattooNums.json');
    }

    factoryObj.getBiospies = function()
    {
      return $http.get(path + 'biopsies.json');
    }

    factoryObj.getDBList = function()
    {
      return $http.get(path + 'adminFunc.json');
    }

    console.log("Lets go");

    factoryObj.getAge = function(){
      return $http.get(path + 'ageDB.json');
    }

    factoryObj.getAnimal = function(){
      return $http.get(path + 'ageDB.json');
    }

    factoryObj.getArea = function(){
      return $http.get(path + 'ageDB.json');
    }

    factoryObj.getBox = function(){
      return $http.get(path + 'ageDB.json');
    }

    factoryObj.getCell = function(){
      return $http.get(path + 'ageDB.json');
    }

    factoryObj.getCountry = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getDeathVoucher = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getDrawer = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getEntity = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getEntityType = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getFreezer = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getFunction = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getIDMethod = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getLocalRegion = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getMaterial = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getMuseum = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getMuseumVoucher = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getOrigin = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getPhoto = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getPublication = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getRegion = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getRole = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getSample = function(){
      return $http.get(path + 'countries.json');
    }

    factoryObj.getSex = function(){
      console.log("Inside Sex");
      return $http.get(path + 'sexDB.json');
    }

    factoryObj.getSite = function(){
      console.log("Inside Sex");
      return $http.get(path + 'sexDB.json');
    }

    factoryObj.getSpecies = function(){
      return $http.get(path + 'species.json');
    }

    factoryObj.getTest = function(){
      return $http.get(path + 'species.json');
    }

    factoryObj.getTitle = function(){
      return $http.get(path + 'species.json');
    }

    factoryObj.getUser = function(){
      return $http.get(path + 'species.json');
    }

    return factoryObj;
}]);
