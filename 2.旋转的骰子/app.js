var autoLock = false;
document.getElementById('container').addEventListener('mousemove', function(e) {
	if (autoLock) {
		return;
	}
	let x = e.clientX / window.innerWidth * 360;
	let y = e.clientY / window.innerHeight * 360;
	let no = '';
	if (y > 45 && y < 135) {
		no = '点数3';
	} else if (y > 135 && y < 225) {
		if (x > 45 && x < 135) {
			no = '点数5';
		} else if (x > 135 && x < 225) {
			no = '点数1';
		} else if (x > 225 && x < 315) {
			no = '点数6';
		} else if (x < 45 || x > 315) {
			no = '点数2';
		}
	} else if (y > 225 && y < 315) {
		no = '点数4';
	} else if (y < 45 || y > 315) {
		if (x > 45 && x < 135) {
			no = '点数6';
		} else if (x > 135 && x < 225) {
			no = '点数2';
		} else if (x > 225 && x < 315) {
			no = '点数5';
		} else if (x < 45 || x > 315) {
			no = '点数1';
		}
	}
	document.getElementById('title').innerText = no;
	document.getElementById('cubebox').style.transform = 'rotateX(' + -y + 'deg) rotateY(' + -x + 'deg)';
});
document.getElementById('no').addEventListener('input', function(e) {
	if(autoLock){
		return;
	}
	let no = parseInt(document.getElementById('no').value);
	if (no != '' && !isNaN(no) && parseInt(no) <= 6 && parseInt(no) > 0) {
		setNo(no);
	}
});
document.getElementById('no-btn2').addEventListener('click', function(e) {
	setNo(Math.floor(Math.random()*6 + 1));
});
function setNo(no){
	document.getElementById('title').innerText = "点数" + no;
	autoLock = true;
	document.getElementById('cube').classList.add("jump");
	document.getElementById('cubebox').classList.add("cubebox-tran");
	console.log(no);
	switch (no) {
		case 1:
			document.getElementById('cubebox').style.transform = 'rotateX(-1805deg) rotateY(-1805deg)';
			break;
		case 2:
			document.getElementById('cubebox').style.transform = 'rotateX(-1805deg) rotateY(-1985deg)';
			break;
		case 3:
			document.getElementById('cubebox').style.transform = 'rotateX(-1895deg) rotateY(-1800deg)';
			break;
		case 4:
			document.getElementById('cubebox').style.transform = 'rotateX(-2075deg) rotateY(-2070deg)';
			break;
		case 5:
			document.getElementById('cubebox').style.transform = 'rotateX(-1805deg) rotateY(-2075deg)';
			break;
		case 6:
			document.getElementById('cubebox').style.transform = 'rotateX(-1805deg) rotateY(-1895deg)';
			break;
	}
	
	setTimeout(function() {
		document.getElementById('cube').classList.remove("jump");
		document.getElementById('cubebox').classList.remove("cubebox-tran");
		autoLock = false;
	}, 1000);
}