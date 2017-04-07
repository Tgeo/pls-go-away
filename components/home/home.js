angular.module('plsGoAway').component('home', {
        templateUrl: 'components/home/home.html',
        controller: HomeCtrl
    });

HomeCtrl.$inject = ['$state'];

function HomeCtrl($state) {
    
    this.navTo = function(name) {
        $state.go('goAway', { name: name });
    }
}