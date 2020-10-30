var $fire = $('.fire');
var $particle = $('.particle');

function ticker() {
	for (let i = 0; i < 10; i++) {
		let particle = $particle.clone();
		particle.css({
			left: Math.random() * 5 + 'vw'
		});
		particle.addClass('particle-ani');
		particle.on("animationend", onfinish);
		$fire.append(particle);
	}
	requestAnimationFrame(ticker);
}

function onfinish(e) {
	e.target.remove();
}

ticker();