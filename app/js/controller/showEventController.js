eventsApp.controller('showEventCtrl', function ($scope, eventDataSeveice) {
    $scope.sortorder='name';
    eventDataSeveice.getEvents(function(event){
        $scope.event=event;
    });

    $scope.upVoteSession= function(session){
        session.upVoteCount++;
    };

    $scope.downVoteSession= function(session){
        session.upVoteCount--;
    };
})