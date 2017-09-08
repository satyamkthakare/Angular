eventsApp.factory('eventDataSeveice', function eventDataSeveice($scope, log) {
    return {
        getEvents : function (successcb) {
            $http({method: 'GET', url: 'data/1.json'}).success(function (data, status) {
                successcb(data);
            }).error(function(data,status,headers,config){
                $log.warn(status);
                alert(data);
            });
        }

    };
});