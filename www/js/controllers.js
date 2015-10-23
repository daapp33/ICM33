angular.module('icoming.controllers', [])

.controller('HomeCtrl', function($scope, $ionicPopup, localStorageService, $timeout) {
    // On va chercher les adrseses en LS
    $scope.adrList = localStorageService.get("adrList");
    // On cache le bouton de retour dans la bar de navigation
    $scope.hideBackButton = true;
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


})

.controller('ajoutContactCtrl', function($scope, $rootScope) {
    $scope.contacts = $rootScope.contacts;
})

.controller('ajoutAdresseCtrl', function($scope, $ionicPopup, localStorageService) {
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

})

.controller('ajoutMoyenTransportCtrl', function($scope, $ionicPopup, localStorageService) {
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

})



/*

function onSuccess(contacts) {
    $scope.contactList = contacts;
    for (var i = 0; i < contacts.length; i++) {
        alert("Formatted: " + contacts[i].name.formatted + "\n" +
            "Family Name: " + contacts[i].name.familyName + "\n" +
            "Given Name: " + contacts[i].name.givenName + "\n" +
            "Middle Name: " + contacts[i].name.middleName + "\n" +
            "Suffix: " + contacts[i].name.honorificSuffix + "\n" +
            "Prefix: " + contacts[i].name.honorificSuffix);
    }
};

function onError(contactError) {
    alert('onError!');
};

$timeout(function() {
    if (navigator.contacts.length != 3) {
        alert('natif');
        var options = new ContactFindOptions();
        options.filter = "";
        filter = ["displayName", "name"];
        navigator.contacts.find(filter, onSuccess, onError, options);
    } else {
        $scope.contactList = navigator.contacts;
    }
}, 1500);*/
