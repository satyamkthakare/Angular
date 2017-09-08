'use strict'

eventsApp.controller("calculate", function ($scope, calculate) {
    $scope.calculateInput = function (input1, input2) {
        $scope.result = calculate.calculationProcess(input1, input2);
    }

});