angular.module('icoming.services', [])

.factory('Parse', function() {

})


.factory("userModele", function() {

    var user = [];
    user.init = function() {
        user = [{
            "displayName": "Damien",
            "diminutif": "DF",
            "adresseLieu": "Travail",
            "moyenTransport": "bus"
        }, {
            "displayName": "Antho",
            "diminutif": "AA",
            "adresseLieu": "Travail",
            "moyenTransport": "velo"
        }]
        return user;
    }

    user.addUser = function(displayName, diminutif, adresseLieu, moyenTransport) {
        var newUser = [{
            "displayName": displayName,
            "diminutif": diminutif,
            "adresseLieu": adresseLieu,
            "moyenTransport": moyenTransport
        }]
        user = user.concat(newUser);
        return user;
    }

    user.test = function() {
        alert('ok');
    }

    user.getUsers = function() {
        return user;
    }

    return user;

});
