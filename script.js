$(document).ready(function(){
	$('.checkmark').hide();
	$('.list-one .list-border:first-child').addClass('highlight');
	$('.image:first-child').addClass('d-highlight grow');
	$('.image:first-child .l-group').addClass('dark');
	function mouseOver() {
		$(this).find('.balloon').addClass('balloon-active');
	}
	function mouseOut() {
		$(this).find('.balloon').removeClass('balloon-active');
	}
	$('.list-border').hover(mouseOver, mouseOut);

	// Ingredient List Check-off

	$('.list-one .list-border:first-child').click(function() {
		$(this).find('.checkmark').show();
		$(this).find('.balloon').css('opacity', 1);
		$(this).removeClass('highlight')
			.css('pointer-events', 'none');
		$(this).next().addClass('highlight');
	});

	$('.list-one .list-border:not(:first-child)').click(function(){
		if ($(this).prev().find('.checkmark').css('display') != 'none') {
			$(this).find('.checkmark').show();
			$(this).find('.balloon').css('opacity', 1);
			$(this).removeClass('highlight')
				.css('pointer-events', 'none');
			$(this).next().addClass('highlight');
		}
		if ($('.list-one .list-border:last-child').find('.checkmark').css('display') != 'none') {
			$('.list-two .list-border:first-child').addClass('highlight');
			$(this).css('pointer-events', 'none');
		}
	});

	$('.list-two .list-border:first-child').click(function(){
		if ($('.list-one .list-border:last-child').find('.checkmark').css('display') != 'none') {
			console.log("hi");
			$(this).find('.checkmark').show();
			$(this).find('.balloon').css('opacity', 1);
			$(this).removeClass('highlight')
				.css('pointer-events', 'none');
			$(this).next().addClass('highlight');
		}
	});

	$('.list-two .list-border:not(:first-child)').click(function(){
		if ($(this).prev().find('.checkmark').css('display') != 'none') {
			console.log("hhhmmmm");
			$(this).find('.checkmark').show();
			$(this).find('.balloon').css('opacity', 1);
			$(this).removeClass('highlight')
				.css('pointer-events', 'none');
			$(this).next().addClass('highlight');
		}
	});

	// Directions Check Off

	$('.image:first-child').click(function(){
		$(this)
			.find('p')
				.hide()
			.end()
			.find('.drawing span')
				.addClass('big-checkmark')
			.end()
			.find('.drawing')
				.css('opacity', 1)
			.end()
			.find('.l-group')
				.css('background-color', 'rgba(0,0,0,0.4)')
				.removeClass('dark')
			.end()
			.removeClass('d-highlight grow')
			.css('pointer-events', 'none')
			.next()
				.addClass('d-highlight grow')
			.end()
			.next()
				.find('.l-group')
					.addClass('dark');
	});
 
	$('.image').click(function(){
		if ($(this).prev().find('p').css('display') == 'none') {
			$(this)
				.find('p')
					.hide()
				.end()
				.find('.drawing span')
					.addClass('big-checkmark')
				.end()
				.find('.drawing')
					.css('opacity', 1)
				.end()
				.find('.l-group')
					.css('background-color', 'rgba(0,0,0,0.4)')
					.removeClass('dark')
				.end()
				.removeClass('d-highlight grow')
				.css('pointer-events', 'none')
				.next()
					.addClass('d-highlight grow')
				.end()
				.next()
					.find('.l-group')
						.addClass('dark');
		}
	});

	// Toggle Images Visibility

	$('#image-checkbox').click(function(){
		$('.image img').toggle(this.checked);
	});

	// Reset Ingredients Checklist

	$('#i-reset').click(function(){
		$('.checkmark').hide();
		$('.list-one .list-border').removeClass('highlight')
			.css('pointer-events', 'auto');
		$('.list-one .list-border:first-child').addClass('highlight');
		$('.list-two .list-border').removeClass('highlight')
			.css('pointer-events', 'auto');
		$('.balloon').css('opacity', 0.5);
		$('.list-border').hover(mouseOver, mouseOut);
	});

	// Reset Directions Checklist
	// does not reset opacity of balloon on hover - fix later

	$('#d-reset').click(function(){
		$('.image p').show();
		$('.drawing span').removeClass('big-checkmark');
		$('.drawing').css('opacity', 0.8);
		$('.l-group').css('background-color', '');
		$('.image').removeClass('d-highlight grow')
			.css('pointer-events', 'auto');;
		$('.image .l-group').removeClass('dark');
		$('.image:first-child').addClass('d-highlight grow');
		$('.image:first-child .l-group').addClass('dark');
	});

});
