(function() {
  var app;

  app = angular.module('oocss');

  app.directive('ooSnippet', function() {
    return {
      restrict: 'A',
      link: function($scope, $elem, $attrs) {
        return hljs.highlightBlock($elem[0]);
      }
    };
  });

}).call(this);

//# sourceMappingURL=directives.js.map
