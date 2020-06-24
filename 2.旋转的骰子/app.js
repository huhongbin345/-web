document.getElementById('container').addEventListener('mousemove', function(e) {
	let x = e.clientX / window.innerWidth * 360;
	let y = e.clientY / window.innerHeight * 360;
	document.getElementById('cubebox').style.transform = 'rotateX(' + -y + 'deg) rotateY(' + -x + 'deg)';
});

function setNo() {
	let no = parseInt(document.getElementById('no').value);
	if (no == '') {
		console.log(no);
	} else {
		if (!isNaN(no)) {
			document.getElementById('cube').classList.add("jump");
			console.log(no);
			setTimeout(function(){
				document.getElementById('cube').classList.remove("jump");
			}, 500);
		}
	}

}
