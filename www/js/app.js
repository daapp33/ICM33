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
        if (typeof StatusBar !== "undefined") {
            StatusBar.overlaysWebView(true);
            StatusBar.styleLightContent();
        }
        setTimeout(function() {
            if (typeof navigator.splashscreen !== "undefined") {
                navigator.splashscreen.hide();
            }
        }, 200);
        var contacts = {}; // We will use it to load contacts   
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
            controller: "ajoutAdresseCtrl",
            params: {
                ncontact: null
            }
        })
    $stateProvider
        .state('ajoutMoyenTransport', {
            url: '/home',
            cache: false,
            templateUrl: "templates/ajoutMoyenTransport.html",
            controller: "ajoutMoyenTransportCtrl",
            params: {
                ncontact: null,
                nadresse: null
            }
        })
    $urlRouterProvider.otherwise('/home');

});
