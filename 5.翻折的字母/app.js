var $words = $('.word');
$words.each(function(index) {
	addEvent(this);
});

function addEvent(word){
	$(word).hover(function(){
		$(this).removeClass('word-leave');
		$(this).addClass('word-hover');
	},function(){
	    $(this).removeClass('word-hover');
	    $(this).addClass('word-leave');
	});
}

var index = 1;
var isHover = false;
var milliSeconds = 200;
var lastTime = new Date().getTime();
function ticker(){
	let nowTime = new Date().getTime();
	if(lastTime + milliSeconds < nowTime){
		lastTime = nowTime;
		if(!isHover){
			$('.auto-box .word' + index).removeClass('word-leave');
			$('.auto-box .word' + index).addClass('word-hover');
		}else{
			$('.auto-box .word' + index).removeClass('word-hover');
			$('.auto-box .word' + index).addClass('word-leave');
			index++;
		}
		isHover = !isHover;
		if(index == 9){
			index = 1;
		}
	}
	requestAnimationFrame(ticker);
}
ticker();