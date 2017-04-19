angular.module('plsGoAway').component('goAway', {
        templateUrl: 'components/go-away/go-away.html',
        controller: GoAwayCtrl
    });

GoAwayCtrl.$inject = [
    '$stateParams',
    '$interval'
];

function GoAwayCtrl($stateParams, $interval) {
    let self = this;
    self.ctr = 0;

    self.$onInit = function() {
        self.name = self.formatName($stateParams.name);
        $interval(function() {
            self.ctr++;
            if (!self.goText && self.ctr > 16) {
                self.startGoAway();
            }
        }, 1000);
    }

    self.startGoAway = function() {
        self.goText = 'G';
        $interval(function() {
            self.goText = self.goText + 'o';
        }, 40);
    }

    self.formatName = function(name) {
        if (!name || name.length === 0) return 'you';
        return name[0].toUpperCase() + name.slice(1);
    }
}