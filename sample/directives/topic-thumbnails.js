SampleApp.directive('topicThumbnail', function() {
    return {
        restrict: 'E',
        scope: {
            topic : "="
        },
        templateUrl: "views/topic-thumbnail.html",

        link: function($scope, $element, $attribute) {

        }
    }
});