angular.module('icoming.controllers', [])

.controller('HomeCtrl', function($scope,$ionicPopup) {
  /*TODO*/
  $scope.test=function(){
    $ionicPopup.alert({
                title: 'Anthooooo???',
                okType: 'button-balanced'
            });
  }
});
