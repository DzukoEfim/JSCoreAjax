'use strict';

var config = angular.module('myApp.config' , []);

config.constant('baseConfig', {
	'data' : {
            date: "4\/21\/2014",
            title: "AJAX",
            lector: [
                "alena_karaba"
            ],
            location: "K1\/3",
            description: "some description",
            level: "D1-D5",
            notes: "",
            attendees: [
                "alena_karaba"
            ],
            tags: [
                "ajax",
                "xmlhttprequest",
                "promises"
            ]
        }
})