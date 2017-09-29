// Check off todos
$('ul').on('click', 'li', function() {
	$(this).toggleClass("completed");
});

// delete button
$('ul').on('click', 'span', function (e) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
	if(e.which === 13) {
		// grab input
		var inp = $(this).val();
		$(this).val("");

		// make new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + inp + "</li>");
	}
});

$('.fa-plus').click(function () {
	$("input[type='text']").fadeToggle();
});