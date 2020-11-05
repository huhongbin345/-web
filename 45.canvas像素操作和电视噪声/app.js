var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var data = null;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var tvX = window.innerWidth / 100 * 25;
var tvY = window.innerHeight / 100 * 40;
var tvWidth = window.innerWidth / 100 * 50;
var tvHeight = window.innerHeight / 100 * 50;
var allTime = 100;
var nowTime = 0;
var flag = false;

initCanvas();

function initCanvas() {
	canvas.width = winWidth;
	canvas.height = winHeight;
	data = ctx.createImageData(tvWidth, tvHeight);
	ticker();
}

function noise() {
	let buff = data.data;
	for (let i = 0; i < buff.length; i += 4) {
		buff[i] = buff[i + 1] = buff[i + 2] = randomInt(0, 255);
		buff[i + 3] = 255;
	}
	ctx.putImageData(data, tvX, tvY);
}

function white() {
	let buff = data.data;
	for (let i = 0; i < buff.length; i += 4) {
		buff[i] = buff[i + 1] = buff[i + 2] = 255;
		buff[i + 3] = 255;
	}
	ctx.putImageData(data, tvX, tvY);
}

function ticker() {
	nowTime++;
	if (nowTime > allTime) {
		flag = !flag;
		nowTime = 0;
	}
	if (!flag) {
		ctx.clearRect(0, 0, winWidth, winHeight);
		noise();
	} else {
		ctx.clearRect(0, 0, winWidth, winHeight);
		white();
	}
	requestAnimationFrame(ticker);
}
