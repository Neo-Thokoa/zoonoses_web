transluxModule.factory('transluxService', ["$http", function ($http) {

    var factoryObj = {};

    factoryObj.getDeparturePoints = function (path) {
        return $http.get(path + 'departurePoints.json');
    }

    factoryObj.getDates = function (path) {
        return $http.get(path + 'datesAvailable.json');
    }


    return factoryObj;
}]);
