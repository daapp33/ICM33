// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('icoming', ['ionic', 'icoming.controllers', 'icoming.services', 'google.places', 'LocalStorageModule'])

.run(function($ionicPlatform) {
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
        console.log('navigator.contacts');
        if (!navigator.contacts) {
            navigator.contacts = [{
                "name": {
                    "formatted": "anthoooooo",
                    "familyName": "aumettre",
                    "givenName": "pizza"
                }
            }, {
                "name": {
                    "formatted": "pcha",
                    "familyName": "charles",
                    "givenName": "pedro"
                }
            }, {
                "name": {
                    "formatted": "dfou",
                    "familyName": "gosu",
                    "givenName": "gamer"
                }
            }];
            //navigator.contacts[0] = '{"name":{"formatted":"anthoooooo","familyName":"aumettre","givenName":"pizza"}}';
            //navigator.contacts[1] = '{"name":{"formatted":"pcha","familyName":"charles","givenName":"pedro"}}';
            //navigator.contacts[2] = '{"name":{"formatted":"dfou","familyName":"gosu","givenName":"gamer"}}';
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
