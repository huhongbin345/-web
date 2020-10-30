var time = {
	hour: '00',
	minute: '00',
	second: '00',
};
var $numbers = null;
var $dots = null;

function init() {
	$numbers = $('.number');
	$dots = $('.clock-dot');
	$numbers.find('.card.after').on("animationend", onfinish);
	ticker();
}

function onfinish() {
	let $a, $b, $number = $(this).closest('.number');
	$number.removeClass('active');
	$b = $number.find('.card.before');
	$a = $number.find('.card.after');
	$a.removeClass('after').addClass('before');
	$b.removeClass('before').addClass('after');
	$dots.removeClass('dot-color');
}

function ticker() {
	let hour = new Date().getHours() + '';
	let minute = new Date().getMinutes() + '';
	let second = new Date().getSeconds() + '';
	if (hour.length == 1) {
		hour = '0' + hour;
	}
	if (minute.length == 1) {
		minute = '0' + minute;
	}
	if (second.length == 1) {
		second = '0' + second;
	}
	if (hour != time.hour) {
		if (hour[0] != time.hour[0]) {
			$numbers.eq(0).find('.card.after .text span').text(hour[0]);
			$numbers.eq(0).addClass('active');
		}
		if (hour[1] != time.hour[1]) {
			$numbers.eq(1).find('.card.after .text span').text(hour[1]);
			$numbers.eq(1).addClass('active');
		}
		time.hour = hour;
	}
	if (minute != time.minute) {
		if (minute[0] != time.minute[0]) {
			$numbers.eq(2).find('.card.after .text span').text(minute[0]);
			$numbers.eq(2).addClass('active');
		}
		if (minute[1] != time.minute[1]) {
			$numbers.eq(3).find('.card.after .text span').text(minute[1]);
			$numbers.eq(3).addClass('active');
		}
		time.minute = minute;
	}
	if (second != time.second) {
		if (second[0] != time.second[0]) {
			$numbers.eq(4).find('.card.after .text span').text(second[0]);
			$numbers.eq(4).addClass('active');
		}
		if (second[1] != time.second[1]) {
			$numbers.eq(5).find('.card.after .text span').text(second[1]);
			$numbers.eq(5).addClass('active');
		}
		$dots.addClass('dot-color');
		time.second = second;
	}
	requestAnimationFrame(ticker);
}
init();
