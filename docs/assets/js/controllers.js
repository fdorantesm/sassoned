(function() {
  var app;

  app = angular.module('oocss');

  app.controller('mainCtrl', [
    "$scope",
    function($scope) {
      $scope.version = "1.0.0";
      return $scope.baseUrl = window.location.origin;
    }
  ]);

}).call(this);

//# sourceMappingURL=controllers.js.map
