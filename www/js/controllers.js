angular.module('icoming.controllers', [])

.controller('HomeCtrl', function($scope, $ionicPopup) {
    /*TODO*/
    $scope.test = function() {
        $ionicPopup.alert({
            title: 'Mettre en place le Scroll en bas de la page',
            okType: 'button-balanced'
        });
    }

});
