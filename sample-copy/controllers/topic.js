SampleApp.controller('TopicController', function( $scope, $http, $routeParams ){

    $scope.topic = null;

    $http({
        url: "json/topics.json",
        method: "GET"
    }).success(function( topics ){
        $scope.topics = topics;

        for( var i = 0;  i < $scope.topics.length; i++ ) {
            if( $scope.topics[i].name.toLowerCase() == $routeParams.topicId ) {
                $scope.topic = $scope.topics[i];
            }
        }
    });
})