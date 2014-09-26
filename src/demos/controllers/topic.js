SampleApp.controller('TopicController', function( $scope, $http ){

    $http({
        url: "json/topics.json",
        method: "GET"
    }).success(function( topics ){
        $scope.topics = topics;
        console.log($scope.topics)
    });
})