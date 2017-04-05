angular.module('plsGoAway.goAway', ['ngNewRouter'])
    .controller('GoAwayController', ['$routeParams', function ($routeParams) {
        this.name = $routeParams.name;
    }]);