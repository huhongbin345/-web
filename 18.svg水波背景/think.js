var $svg = $('svg');
var $ripple = $('.ripple');
var $ripples = $('#ripples');

$svg.on("click", function(e) {
	let $ani;
	let $newRipple;
	let matrix = $svg[0].getScreenCTM().inverse();
	let svgPoint = $svg[0].createSVGPoint();
	let svgXY;
	svgPoint.x = e.clientX;
	svgPoint.y = e.clientY;
	svgXY = svgPoint.matrixTransform(matrix);

	$newRipple = $ripple.clone();
	$ripples.append($newRipple);
	$newRipple.attr("transform", "translate(" + svgXY.x + "," + svgXY.y + ")");

	$ani = $newRipple.find('animate');

	$newRipple.myEndAniNum = 0;
	$newRipple.myOnEnd = function() {
		if (++$newRipple.myEndAniNum == $ani.length) {
			$newRipple.remove();
		}
	};

	$ani.each(function(i) {
		$ani[i].beginElement();
		$ani[i].onend = $newRipple.myOnEnd;
	});

});
