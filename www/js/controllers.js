angular.module('icoming.controllers', [])

.controller('HomeCtrl', function($scope, $ionicPopup, localStorageService) {
    // On va chercher les adrseses en LS
    $scope.adrList = localStorageService.get("adrList");
    $scope.listCanSwipe = true;
    if (!$scope.adrList) {
        $scope.adrList = [];
    }
    /*TODO*/
    $scope.test = function() {
        $ionicPopup.alert({
            title: 'Mettre en place le Scroll en bas de la page',
            okType: 'button-balanced'
        });
    }

    $scope.addAdr = function(inputAdr) {
        if (inputAdr.formatted_address) {
            //Ajout en début de tableau
            $scope.adrList.unshift(inputAdr.formatted_address);
            localStorageService.set("adrList", $scope.adrList);
        }
    }
    $scope.deleteAdr = function(index) {
        $scope.adrList.splice(index, 1);
        localStorageService.set("adrList", $scope.adrList);
    }

});
