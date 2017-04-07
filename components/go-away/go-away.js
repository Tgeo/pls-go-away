angular.module('plsGoAway').component('goAway', {
        templateUrl: 'components/go-away/go-away.html',
        controller: GoAwayCtrl
    });

GoAwayCtrl.$inject = ['$stateParams'];

function GoAwayCtrl($stateParams) {
    let that = this;

    that.$onInit = function() {
        that.name = that.formatName($stateParams.name);
    }

    that.formatName = function(name) {
        if (!name || name.length === 0) return 'you';
        return name[0].toUpperCase() + name.slice(1);
    }
}