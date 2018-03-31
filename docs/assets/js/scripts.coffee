$ ->
	console.log(hljs)
	$('code').each ->
		hljs.highlightBlock this
