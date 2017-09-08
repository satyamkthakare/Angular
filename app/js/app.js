'use strict';

var eventsApp= angular.module('eventsApp', ['ngRoute']);

eventsApp.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl : 'templates/home.html'
    })
        .when('/calculate', {
            templateUrl: 'templates/addission.html',
            controller : 'calculate'
        })
        .when('/events', {
            templateUrl: 'templates/events.html',
            controller : 'EventController'
        })
        .when('/showEvents', {
            templateUrl: 'templates/showEvents.html',
            controller : 'showEventCtrl'
        })
})
