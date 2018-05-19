(function() {
  var app;

  app = angular.module('oocss');

  app.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider,
    $routeProvider) {
      return $routeProvider.when('/',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/home.html'
      }).when('/background',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/background.html'
      }).when('/border',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/border.html'
      }).when('/box-sizing',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/box-sizing.html'
      }).when('/color',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/color.html'
      }).when('/cursor',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/cursor.html'
      }).when('/display',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/display.html'
      }).when('/float',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/float.html'
      }).when('/flex',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/flex.html'
      }).when('/font',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/font.html'
      }).when('/height',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/height.html'
      }).when('/grid-flex',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/grid-flex.html'
      }).when('/list',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/list.html'
      }).when('/margin-and-padding',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/margin-and-padding.html'
      }).when('/visible-and-hidden',
    {
        controller: 'mainCtrl',
        templateUrl: './assets/templates/visible-and-hidden.html'
      }).otherwise({
        controller: 'mainCtrl',
        template: "<h3>404</h3>"
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=config.js.map
