var SampleApp = angular.module('SampleApp', ['ngRoute']);

SampleApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller:'TopicController',
            templateUrl:'views/home.html'
        })
        .when('/topic/:topicId', {
            controller:'TopicController',
            templateUrl:'views/topic.html'
        })

        // Default
        .otherwise({
            redirectTo:'/'
        });
});
