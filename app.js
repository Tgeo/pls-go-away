const app = angular.module('plsGoAway', ['ui.router']);

app.config(configFn);

configFn.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

function configFn($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state({
        name: 'home',
        url: '/',
        template: '<home></home>'
    });
    $stateProvider.state({
        name: 'goAway',
        url: '/:name',
        template: '<go-away></go-away>'
    });
    $urlRouterProvider.otherwise('/');
}