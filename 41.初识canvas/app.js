$(document).ready(function() {
	document.getElementById("demoCanvas").width = window.innerWidth;
	document.getElementById("demoCanvas").height = window.innerHeight;
});
//圆数组
var circles = [];
//圆速度方向数组
var circleSpeed = [];
//圆的总数
var circleNo = 50;
//创建一个舞台，得到一个参考的画布
var stage = new createjs.Stage("demoCanvas");

for (var i = 0; i < circleNo; i++) {
	//创建一个形状的显示对象
	var circle = new createjs.Shape();
	var circleWidth = 50 * Math.random() + 10;
	var circleX = window.innerWidth / 2;
	var circleY = window.innerHeight / 2;
	circle.graphics.beginFill('rgba(' +
			(Math.random() * 255).toFixed(0) + ', ' +
			(Math.random() * 255).toFixed(0) + ', ' +
			(Math.random() * 255).toFixed(0) + ', ' +
			(0.5 + 0.5 * Math.random()).toFixed(1) + ')')
		.drawCircle(circleX, circleY, circleWidth);
	circles.push(circle);
	circleSpeed.push({
		circleX: circleX,
		circleY: circleY,
		circleVX: 10 - (Math.random() * 20),
		circleVY: 10 - (Math.random() * 20),
		circleWidth: circleWidth,
	});
	stage.addChild(circle);
}

createjs.Ticker.addEventListener("tick", function(event) {
	if (!event.paused) {
		// 行动时进行 Ticker 不停了。
		for (var i = 0; i < circleNo; i++) {
			if (circleSpeed[i].circleX + circleSpeed[i].circleVX + circleSpeed[i].circleWidth > window.innerWidth ||
				circleSpeed[i].circleX + circleSpeed[i].circleVX - circleSpeed[i].circleWidth < 0) {
				circleSpeed[i].circleVX = -circleSpeed[i].circleVX;
			}
			if (circleSpeed[i].circleY + circleSpeed[i].circleVY + circleSpeed[i].circleWidth > window.innerHeight ||
				circleSpeed[i].circleY + circleSpeed[i].circleVY - circleSpeed[i].circleWidth < 0) {
				circleSpeed[i].circleVY = -circleSpeed[i].circleVY;
			}
			circleSpeed[i].circleX += circleSpeed[i].circleVX;
			circleSpeed[i].circleY += circleSpeed[i].circleVY;
			// console.log('x:' + circleSpeed[i].circleX + ';y:' + circleSpeed[i].circleY);
			circles[i].x += circleSpeed[i].circleVX;
			circles[i].y += circleSpeed[i].circleVY;
		}
		stage.update();
	}
});
