zoonosisModule.factory('zoonosisService', ["$http", function ($http) {

    var factoryObj = {};
    var path = "./Json";

    factoryObj.getTattooClass = function () {
        return $http.get(path + 'tattoClassifications.json');
    }

    factoryObj.getDates = function () {
        return $http.get('datesAvailable.json');
    }


    return factoryObj;
}]);
