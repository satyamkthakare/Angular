var myApp = angular.module("myApp", []);
(function (app) {
    'use strict'

    var app = angular.module("myApp", []);

    app.controller("eventController", function ($scope) {
        var technologies = [
            {
                tech: "C#",
                likes: 0,
                dislikes: 0,
                subjects: [
                    {subject: "Angularjs"},
                    {subject: "Javascript"},
                    {subject: "Java"}
                    ]
            },
            {
                tech: "Java",
                likes: 0,
                dislikes: 0,
                subjects: [
                    {subject: "Angularjs"},
                    {subject: "Javascript"},
                    {subject: "Asp.ne"}
                    ]
            },
            {
                tech: "ASP.NET",
                likes: 0,
                dislikes: 0,
                subjects: [
                    {subject: "Angularjs"},
                    {subject: "Javascript"},
                    {subject: "Node.js"}
                    ]
            },
            {
                tech: "RUBY on Rells",
                likes: 0,
                dislikes: 0,
                subjects: [
                    {subject: "Angularjs"},
                    {subject: "java"},
                    {subject: "Node.js"}
                ]
            }
        ];
        $scope.massege = "Technology List";
        $scope.technologiesList = technologies;

        $scope.incrementLikesCount = function(technologies){
            technologies.likes++;
        };

        $scope.incrementDislikeCount = function (technologies) {
            technologies.dislikes++;
        };
    })

}(myApp));