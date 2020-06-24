$(document).ready(function() {
	document.getElementById("demoCanvas").width = window.innerWidth;
	document.getElementById("demoCanvas").height = window.innerHeight;
});
var angle = 0;
//创建一个舞台，得到一个参考的画布
var stage = new createjs.Stage("demoCanvas");
var circle = new createjs.Shape();
circle.shadow = new createjs.Shadow("red", 1, 1, 5);
stage.addChild(circle);
var circle1 = new createjs.Shape();
circle1.graphics.beginFill('white').drawCircle(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth / 10 -
	30);
stage.addChild(circle1);



// var myG1 = new createjs.Graphics();
// var myS1 = new createjs.Shape(myG1);
// myG1.beginStroke("#FF0000");
// var x1 = 0;
// var x2 = 0;
// var stX = -20;
// var stY = 0;
// var enX = 1024;
// var enY = 0;
// for (var i = 1; i < 100; i++) {
// 	stY = stY + i;
// 	enY = enY + i;
// 	x1 = x1 + i;
// 	y1 = 400 - x1;
// 	x2 = x2 + i;
// 	y2 = 1000 - x2;
// 	myG1.moveTo(stX, stY);
// 	myG1.bezierCurveTo(x1, y1, x2, y2, enX, enY);
// 	stage.addChild(myS1);
// }
var text = null;
var waveSpeedX = 5;
var myG1 = new createjs.Graphics();
var myS1 = new createjs.Shape(myG1);
var myG2 = new createjs.Graphics();
var myS2 = new createjs.Shape(myG2);
drawWave();
drawText();

createjs.Ticker.addEventListener("tick", function(event) {
	if (!event.paused) {
		// 行动时进行 Ticker 不停了。
		if (angle > 360) {
			angle = 0;
		}
		angle += 3;
		myS1.x = myS1.x + waveSpeedX;
		myS1.y = 360 - angle;
		myS2.x = myS2.x - waveSpeedX;
		myS2.y = 360 - angle;
		if (myS1.x < 0) {
			waveSpeedX = -waveSpeedX;
		} else if (myS1.x > 300) {
			waveSpeedX = -waveSpeedX;
		}
		text.text = parseInt(angle / 360 * 100) + '%';



		drawSector(circle, window.innerWidth / 2, window.innerHeight / 2, window.innerWidth / 10, angle, -90, 'red');
		stage.update();
	}
});

function drawSector(mc, x, y, r, angle, startFrom, color) {
	mc.graphics.clear();
	mc.graphics.beginFill(color);
	mc.graphics.moveTo(x, y);
	angle = (Math.abs(angle) > 360) ? 360 : angle;
	//为了使方法方便使用，这里的起始角度和扇形弧度都用角度表示，由于三角函数用的弧度制，这里先转换为弧度。
	startFrom = startFrom * Math.PI / 180;
	var x1 = x + r * Math.cos(startFrom);
	var y1 = y + r * Math.sin(startFrom);
	var endAngle = startFrom + angle * Math.PI / 180;
	mc.graphics.lineTo(x1, y1);
	mc.graphics.arc(x, y, r, startFrom, endAngle, false);
	if (angle != 360) {
		mc.graphics.lineTo(x, y);
	}
	mc.graphics.endFill();
}

function drawWave() {
	var circle3 = new createjs.Shape();
	circle3.graphics.beginFill('white').drawCircle(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth / 10 -
		28);
	myS2.mask = circle3;
	
	myG1.beginStroke("#FF0000");
	var x1 = 30;
	var y1 = window.innerHeight / 2 - window.innerWidth / 10 - 20;
	var stX1 = x1 - 30;
	var stY1 = y1 + 30;
	for (var i = 1; i < 1000; i++) {
		for (var j = 0; j < window.innerWidth / 60; j++) {
			if (j % 2 == 1) {
				myG1.moveTo(stX1 + j * 60, stY1 + i / 2);
				myG1.bezierCurveTo(stX1 + j * 60, stY1 + i / 2, x1 + j * 60, y1 + i / 2, stX1 + (j + 1) * 60, stY1 + i / 2);
			} else {
				myG1.moveTo(stX1 + j * 60, stY1 + i / 2);
				myG1.bezierCurveTo(stX1 + j * 60, stY1 + i / 2, x1 + j * 60, y1 + 50 + i / 2, stX1 + (j + 1) * 60, stY1 + i / 2);
			}

		}
	}
	myS1.y = 360;
	stage.addChild(myS1);

	var circle2 = new createjs.Shape();
	circle2.graphics.beginFill('white').drawCircle(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth / 10 -
		28);
	myS1.mask = circle2;



	myG2.beginStroke("#0000FF");
	var x1 = 30;
	var y1 = window.innerHeight / 2 - window.innerWidth / 10 - 20;
	var stX1 = x1 - 30;
	var stY1 = y1 + 30;
	for (var i = 1; i < 1000; i++) {
		for (var j = 0; j < window.innerWidth / 60; j++) {
			if (j % 2 == 1) {
				myG2.moveTo(stX1 + j * 60, stY1 + i / 2);
				myG2.bezierCurveTo(stX1 + j * 60, stY1 + i / 2, x1 + j * 60, y1 + 50 + i / 2, stX1 + (j + 1) * 60, stY1 + i / 2);
			} else {
				myG2.moveTo(stX1 + j * 60, stY1 + i / 2);
				myG2.bezierCurveTo(stX1 + j * 60, stY1 + i / 2, x1 + j * 60, y1 + i / 2, stX1 + (j + 1) * 60, stY1 + i / 2);
			}
	
		}
	}
	myS2.y = 360;
	// myS2.alpha = 0.5;
	stage.addChild(myS2);
}

function drawText() {
	text = new createjs.Text("Hello World", "50px Arial", "#00ff00");
	text.x = window.innerWidth / 2;
	text.y = window.innerHeight / 2;
	text.textBaseline = "middle";
	text.textAlign = "center";
	stage.addChild(text);
	
	var drawRoundRect = new createjs.Shape();
	drawRoundRect.graphics.beginFill('black').drawRoundRect(100, 100, 200, 100, 30);
	stage.addChild(drawRoundRect);
}
