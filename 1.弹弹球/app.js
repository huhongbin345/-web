//球宽高
var ballWidth = window.innerWidth / 100 * 3;
//球数组
var balls = [];
//球消失时间
var hideTime = 600;
//点击事件
document.getElementsByClassName('balls')[0].addEventListener('click', function(e) {
	var ball = document.createElement("div");  
	ball.setAttribute('class','ball');
	ball.style.left = (e.clientX - ballWidth / 2) + 'px';
	ball.style.top = (e.clientY - ballWidth / 2) + 'px';
	document.getElementsByClassName('balls')[0].appendChild(ball);
	balls.push({
		//新增球元素
		element: ball,
		//球当前存活时间
		time: 0,
		//球当前的X坐标
		ballX: e.clientX - ballWidth / 2,
		//球当前的Y坐标
		ballY: e.clientY - ballWidth / 2,
		//球在X轴速度
		ballVX: 10 - (Math.random() * 20),
		//球在Y轴速度
		ballVY: 10 - (Math.random() * 20),
	});
});
//计时器
function tick(){
	requestAnimationFrame(tick);
	for(var i = 0; i < balls.length; i++){
		balls[i].ballX -= balls[i].ballVX;
		balls[i].ballY += balls[i].ballVY;
		if(balls[i].ballX > window.innerWidth - ballWidth){
			balls[i].ballVX = -balls[i].ballVX;
			balls[i].ballX = window.innerWidth - ballWidth;
		}else if(balls[i].ballX < 0){
			balls[i].ballVX = -balls[i].ballVX;
			balls[i].ballX = 0;
		}
		if(balls[i].ballY > window.innerHeight - ballWidth){
			balls[i].ballVY = -balls[i].ballVY;
			balls[i].ballY = window.innerHeight - ballWidth;
		}else if(balls[i].ballY < 0){
			balls[i].ballVY = -balls[i].ballVY;
			balls[i].ballY = 0;
		}
		balls[i].element.style.left = balls[i].ballX + 'px';
		balls[i].element.style.top = balls[i].ballY + 'px';
		
		balls[i].time++;
		if(balls[i].time >= hideTime){
			balls[i].element.remove();
			balls.splice(i, 1);
		}
	}
}
tick();