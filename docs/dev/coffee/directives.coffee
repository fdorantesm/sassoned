app = angular.module 'oocss'

app.directive 'ooSnippet', ->
	return
		restrict: 'A'
		link: ($scope, $elem, $attrs) ->
			hljs.highlightBlock $elem[0]
			