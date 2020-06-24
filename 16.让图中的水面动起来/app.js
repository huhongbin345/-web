// var timeline = new TimelineMax({
// 		repeat: -1,
// 		yoyo: true
// 	}),
// 	feTurb = document.querySelector('#feturbulence');

// timeline.add(
// 	new TweenMax.to(feTurb, 8, {
// 		onUpdateParams: [feTurb], //pass the filter element to onUpdate
// 		onUpdate: function(fe) {
// 			var bfX = this.progress() * 0.005 + 0.015, //base frequency x
// 				bfY = this.progress() * 0.05 + 0.1, //base frequency y
// 				bfStr = bfX.toString() + ' ' + bfY.toString(); //base frequency string
// 			fe.setAttribute('baseFrequency', bfStr);
// 			// console.log(this.progress());
// 		}
// 	}), 0
// );
var feTurb = document.querySelector('#feturbulence');
var bfX;
var bfY;
var bfStr;
var progress = 0;
var speed = 0.001;
ticker();

function ticker() {
	progress += speed;
	if (progress > 1 || progress < 0) {
		speed = -speed;
	}
	bfX = progress * 0.005 + 0.015;
	bfY = progress * 0.05 + 0.1;
	bfStr = bfX.toString() + ' ' + bfY.toString();
	feTurb.setAttribute('baseFrequency', bfStr);
	requestAnimationFrame(ticker);
}

function numchange() {
	var num = document.getElementById("numrange");
	console.log(num.value);
	feTurb.setAttribute('numOctaves', num.value)
}
function seedchange() {
	var num = document.getElementById("seedrange");
	console.log(num.value);
	feTurb.setAttribute('seed', num.value)
}