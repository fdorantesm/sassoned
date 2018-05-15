app = angular.module 'oocss'

app.controller 'mainCtrl', ["$scope", ($scope) ->
	$scope.version = "1.0.0"
	$scope.baseUrl = window.location.origin
]
