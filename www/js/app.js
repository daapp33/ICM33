// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('icoming', ['ionic', 'icoming.controllers', 'icoming.services', 'google.places', 'LocalStorageModule'])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
        var contacts = {}; // We will use it to load contacts   

        function onSuccess(contacts) {
            //console.log(contacts);
            alert('Found ' + JSON.stringify(contacts));
            $rootScope.contacts=contacts;
        };

        function onError(contactError) {
            alert('onError!');
        };

        if (!navigator.contacts) {
            contact = [{ // We will use it to save a contact
                "displayName": "Gajotres",
                "id":"203",
                "rawId":"215",
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
            },{"displayName": "Boris"},{"displayName": "Pedro"},{"displayName": "Sancho"}];
            onSuccess(contact);
        } else {
            /*navigator.contacts.pickContact(function(contact) {
                console.log('The following contact has been selected:' + JSON.stringify(contact));
            }, function(err) {
                console.log('Error: ' + err);
            });*/

            var options = new ContactFindOptions();
            options.filter = "a";
            options.multiple = true;
            options.desiredFields = [navigator.contacts.fieldType.id];
            options.hasPhoneNumber = true;
            var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
            navigator.contacts.find(fields, onSuccess, onError, options);
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('lsICM');
    $stateProvider
        .state('home', {
            url: '/home',
            cache: false,
            templateUrl: "templates/home.html",
            controller: "HomeCtrl"
        })
    $stateProvider
        .state('ajoutContact', {
            url: '/home',
            cache: false,
            templateUrl: "templates/ajoutContact.html",
            controller: "ajoutContactCtrl"
        })
    $stateProvider
        .state('ajoutAdresse', {
            url: '/home',
            cache: false,
            templateUrl: "templates/ajoutAdresse.html",
            controller: "ajoutAdresseCtrl"
        })
    $stateProvider
        .state('ajoutMoyenTransport', {
            url: '/home',
            cache: false,
            templateUrl: "templates/ajoutMoyenTransport.html",
            controller: "ajoutMoyenTransportCtrl"
        })
    $urlRouterProvider.otherwise('/home');

});
