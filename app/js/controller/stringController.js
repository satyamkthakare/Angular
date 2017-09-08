'use strict'

eventsApp.controller("stringController", function ($scope, stringService) {
 $scope.transformString = function (input) {
     $scope.output = stringService.processString(input);
 };
})