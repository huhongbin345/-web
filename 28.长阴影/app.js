//X轴偏移量
var offsetX;
//Y轴偏移量
var offsetY;
//text-shadow属性值
var textShadow = '';
//鼠标移动事件
$(".container").on('mousemove', function(e){
	offsetX = window.innerWidth / 2 - e.clientX;
	offsetY = window.innerHeight / 2 - e.clientY;
	// console.log('x:', offsetX, 'y:', offsetY);
	if(parseFloat((offsetX + '').replace(/-/g,'')) > parseFloat((offsetY + '').replace(/-/g,''))){
		if(offsetX < 0){
			for(var i = -1; i > offsetX / 30; i--){
				if(offsetY > 0){
					if(-i > offsetY / 30){
						textShadow = textShadow + i + 'px ' + offsetY / 30 + 'px 1px sienna,';
					}else{
						textShadow = textShadow + i + 'px ' + -i + 'px 1px sienna,';
					}
				}else{
					if(i < offsetY / 30){
						textShadow = textShadow + i + 'px ' + offsetY / 30 + 'px 1px sienna,';
					}else{
						textShadow = textShadow + i + 'px ' + i + 'px 1px sienna,';
					}
				}
			} 
		}else{
			for(var i = 1; i < offsetX / 30; i++){
				if(offsetY > 0){
					if(i > offsetY / 30){
						textShadow = textShadow + i + 'px ' + offsetY / 30 + 'px 1px sienna,';
					}else{
						textShadow = textShadow + i + 'px ' + i + 'px 1px sienna,';
					}
				}else{
					if(-i < offsetY / 30){
						textShadow = textShadow + i + 'px ' + offsetY / 30 + 'px 1px sienna,';
					}else{
						textShadow = textShadow + i + 'px ' + -i + 'px 1px sienna,';
					}
				}
			}
		}
	}else{
		if(offsetY < 0){
			for(var i = -1; i > offsetY / 30; i--){
				if(offsetX > 0){
					if(-i > offsetX / 30){
						textShadow = textShadow + offsetX / 30 + 'px ' + i + 'px 1px sienna,';
					}else{
						textShadow = textShadow + -i + 'px ' + i + 'px 1px sienna,';
					}
				}else{
					if(i < offsetX / 30){
						textShadow = textShadow + offsetX / 30 + 'px ' + i + 'px 1px sienna,';
					}else{
						textShadow = textShadow + i + 'px ' + i + 'px 1px sienna,';
					}
				}
			}
		}else{
			for(var i = 1; i < offsetY / 30; i++){
				if(offsetX > 0){
					if(i > offsetX / 30){
						textShadow = textShadow + offsetX / 30 + 'px ' + i + 'px 1px sienna,';
					}else{
						textShadow = textShadow + i + 'px ' + i + 'px 1px sienna,';
					}
				}else{
					if(-i < offsetX / 30){
						textShadow = textShadow + offsetX / 30 + 'px ' + i + 'px 1px sienna,';
					}else{
						textShadow = textShadow + -i + 'px ' + i + 'px 1px sienna,';
					}
				}
			}
		}
	}
	textShadow = textShadow.substring(0, textShadow.length - 1);
	$("span").css("text-shadow",textShadow);
	textShadow = '';
});