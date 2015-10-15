var app = angular.module('pepemonApp', ['ngMaterial']);
app.config(function($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '500',
            'hue-1': '300',
            'hue-2': '700',
            'hue-3': 'A100'
        })
        .accentPalette('green', {
            'default': '500',
            'hue-1': '300',
            'hue-2': '700',
            'hue-3': 'A100'
        });
    $mdIconProvider
})
app.controller('pepemonCtrl', function($scope) {
    $scope.happyPepe = "http://vignette3.wikia.nocookie.net/pepe-the-frog/images/d/dc/Happy_Pepe.jpg/revision/latest?cb=20150909232018";
    $scope.sadPepe = "http://ih0.redbubble.net/image.53589207.4056/flat,800x800,075,t.u1.jpg"
});
// app.directive('instructorCards', function() {
//     return {
//         restrict: 'EA',
//         template: '<div layout="row" layout-sm="column" layout-align="space-around end" layout-align="space-around center" layout-margin layout-padding style="text-align: center;" layout-wrap><md-card ng-repeat="executive in executives" class="bg-teal-def md-whiteframe-z1" flex="30" flex-sm="95" flex-md="45"><md-button aria-label="Executive picture" class="md-raised"><img class="md-card-image" ng-src="{{ executive.pic }}"></md-button><md-card-content><h2 class="md-headline">{{ executive.name }}</h2><md-button aria-label="Instructor title" class="md-raised">{{ executive.title }}</md-button><p class="md-subhead">{{ executive.description }}</p></md-card-content></md-card></div>'
//     }
// });
