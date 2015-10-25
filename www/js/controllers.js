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
    $scope.oktest = 'coucou';
    $scope.shouldShowDelete = true;
    $scope.testcontacts = '';

    $scope.onItemDelete = function(item) {
        $scope.contacts.splice($scope.contacts.indexOf(item), 1);
    };
    $scope.edit = function(item) {
        alert('Edit Item: ' + item.id);
    };

    function onSuccess(contacts) {
        //console.log(contacts);
        //alert('Found ' + JSON.stringify(contacts));
        //$rootScope.contacts = contacts;
        //$scope.contacts = contacts;
    };

    function onError(contactError) {
        alert('onError!');
    };

    $scope.addContact = function ajoutContact() {
        contact2 = [{
            "displayName": "Antho",
            "name": {
                "givenName": "Dragan",
                "familyName": "Gaic",
                "formatted": "Antho A"
            },
            "phoneNumbers": [{
                "value": "+385959052082",
                "type": "mobile"
            }, {
                "value": "+385914600731",
                "type": "phone"
            }]
        }, {
            "displayName": "Damien",
            "name": {
                "givenName": "Dragan",
                "familyName": "Gaic",
                "formatted": "Damien F"
            },
            "phoneNumbers": [{
                "value": "+385959052082",
                "type": "mobile"
            }, {
                "value": "+385914600731",
                "type": "phone"
            }]
        }];

        $scope.contacts = $scope.contacts.concat(contact2);
        alert($scope.contacts);
    };

    if (!navigator.contacts) {
        contact = [{ // We will use it to save a contact
            "displayName": "Gajotres",
            "id": "203",
            "rawId": "215",
            "name": {
                "givenName": "Dragan",
                "familyName": "Gaic",
                "formatted": "Dragan Gaic"
            },
            "nickname": 'Gajotres',
            "phoneNumbers": [{
                "value": "+385959052082",
                "type": "mobile"
            }, {
                "value": "+385914600731",
                "type": "phone"
            }],
            "emails": [{
                "value": "dragan.gaic@gmail.com",
                "type": "home"
            }],
            "addresses": [{
                "type": "home",
                "formatted": "Some Address",
                "streetAddress": "Some Address",
                "locality": "Zagreb",
                "region": "Zagreb",
                "postalCode": "10000",
                "country": "Croatia"
            }],
            "ims": null,
            "organizations": [{
                "type": "Company",
                "name": "Generali",
                "department": "IT",
                "title": "Senior Java Developer"
            }],
            "birthday": Date("08/01/1980"),
            "note": "",
            "photos": [{
                "value": "https://pbs.twimg.com/profile_images/570169987914924032/pRisI2wr_400x400.jpeg"
            }],
            "categories": null,
            "urls": null
        }, {
            "displayName": "Boris"
        }, {
            "displayName": "Pedro"
        }, {
            "displayName": "Sancho"
        }];
        onSuccess(contact);
    } else {
        navigator.contacts.pickContact(function(contact) {
            alert('point1');
            $rootScope.contacts = contact;
            $scope.contacts = $scope.contacts.concat(JSON.stringify(contact));
            //$scope.contacts = contact;
            console.log('The following contact has been selected:' + JSON.stringify(contact));
            alert('contact est :' + contact.name.formatted);            
            //$scope.testcontacts = JSON.stringify(contact);
            //onSuccess(contact);
        }, function(err) {
            console.log('Error: ' + err);
        });

        /*var options = new ContactFindOptions();
        options.filter = "Aaum";
        options.multiple = true;
        //options.desiredFields = [navigator.contacts.fieldType.id];
        options.hasPhoneNumber = true;
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, onSuccess, onError, options);*/
    }


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
