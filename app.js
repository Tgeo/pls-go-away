const app = angular.module('plsGoAway', [
    'ngNewRouter',
    'plsGoAway.home',
    'plsGoAway.goAway']);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

app.controller('AppController', ['$router', function AppController ($router) {
    $router.config([
        { path: '/', component: 'home' },
        { path: '/:name', component: 'goAway' }
    ]);
}]);