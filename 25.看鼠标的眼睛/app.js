var lEyeX = window.innerWidth / 2 - 50;
var lEyeY = window.innerHeight * 40 / 100;
var rEyeX = window.innerWidth / 2 + 50;
var rEyeY = window.innerHeight * 40 / 100;
$('body').on('mousemove', (e)=>{
	// if(e.clientX < lEyeX){
	// 	console.log('左');
	// }else{
	// 	console.log('右');
	// }
	if(e.clientY < lEyeY){
		console.log('上');
	}else{
		console.log('下');
	}
});