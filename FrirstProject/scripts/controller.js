(function () {
    'use strict'

    var app = angular.module("myApp", []);

    app.controller("myController", function ($scope) {
        var employees = [
            {
                firstName: "Satyam",
                lastName: "Thakare",
                subjects: [
                    {subject: "Angularjs"},
                    {subject: "Javascript"},
                    {subject: "Java"}
                    ]
            },
            {
                firstName: "Manojkumar",
                lastName: "Srivastava",
                subjects: [
                    {subject: "Angularjs"},
                    {subject: "Javascript"},
                    {subject: "Asp.ne"}
                    ]
            },
            {
                firstName: "Chandan",
                lastName: "Wankhede",
                subjects: [
                    {subject: "Angularjs"},
                    {subject: "Javascript"},
                    {subject: "Node.js"}
                    ]
            },
            {
                firstName: "Chandan",
                lastName: "Wankhede",
                subjects: [
                    {subject: "Angularjs"},
                    {subject: "java"},
                    {subject: "Node.js"}
                ]
            }
        ];
        $scope.massege = "Employee List";
        $scope.employeesList = employees;
    })

}());