$(document).ready(function ($) {
	$('.for-event').on('touchend, click',function(e){
		e.preventDefault();
		var el = $(this).attr('data-href');
		$('html, body').animate({
			scrollTop: $(el).offset().top - 50}, 5000);
		return false;
	});

	//Timer
	var _currentDate = new Date();
	var count = 15; // 15 hours
	var _toDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate(), _currentDate.getHours(), _currentDate.getMinutes() + count, 1);

	$('#time, #time2').countdown({
		until: _toDate,
		format: 'HMS',
		compact: true,
		layout: /* Hours */
		'<span class="hours">{h10}{h1}</span>' +

			/* Monutes */
		'<span class="minutes">{m10}{m1}</span>' +

			/* Seconds */
		'<span class="seconds">{s10}{s1}</span>' +

		'<div class="clear"></div>'
	}).removeClass('hidden');
});







