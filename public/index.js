
$(document).on('ready', function() {
	$(".project").hover(function() {
		$(this).find(".links").toggleClass('hide')
		$(this).find(".blurb").toggleClass('hide')
	})
})