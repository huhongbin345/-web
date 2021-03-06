var $svg = $('svg');
var svgNS = "http://www.w3.org/2000/svg";
var $triangles = $('polygon');
var curFilter = document.getElementById("HueRoateA");
var prevFilter = document.getElementById("HueRoateB");

function onclickTriangles() {
	changeFilter();
	$triangles.each(function() {
		changePolygonFilter(this);
	});
}

function changeFilter() {
	let hue = 0;
	let temp = curFilter;
	curFilter = prevFilter;
	prevFilter = temp;
	$(curFilter).children("feColorMatrix").attr("values", hue + "");
}

function changePolygonFilter(polygon) {
	polygon.setAttribute("filter", getPrevFilter());
	let ani = $(polygon).children('set');
	ani[0].setAttribute("from", getPrevFilter());
	ani[0].setAttribute("to", getCurFilter());
}

function getCurFilter() {
	return "url(#" + curFilter.id + ")";
}

function getPrevFilter() {
	return "url(#" + prevFilter.id + ")";
}

function init(polygon, index) {
	let points = $(polygon).attr("points").split(/,|\s/);
	polygon.mycolor = $(polygon).css("fill");
	polygon.cx = ((points[0] * 1 + points[2] * 1 + points[4] * 1) / 3).toFixed(0);
	polygon.cy = ((points[1] * 1 + points[3] * 1 + points[5] * 1) / 3).toFixed(0);
	polygon.setAttribute("filter", getCurFilter());
	createAni(polygon, index);
}

function createAni(polygon, index) {
	let begin = "triangles.click";
	let dur = (Math.random() * 3 + 0.5).toFixed(1);
	createAnimateNode(polygon, index, "fill-opacity", [0, 0.5, 1], [1, 0, 1], dur, begin, "freeze", "replace");
	createAnimateNode(polygon, index, "translate", [0, 0.5, 1], ["0,0", polygon.cx + "," + polygon.cy, "0,0"], dur, begin,
		"freeze", "sum");
	createAnimateNode(polygon, index, "scale", [0, 0.5, 1], [1, 0, 1], dur, begin, "freeze", "sum");
	begin += "+" + (dur / 2).toFixed(1) + "s";
	createAnimateNode(polygon, index, "filter", null, [getPrevFilter(), getCurFilter()], 0.1, begin, "freeze", "sum");
}

function createAnimateNode(node, index, attr, keyTimes, values, dur, begin, fill, additive) {
	let ani = null;
	let str = null;
	if (attr == "scale" || attr == "translate" || attr == "rotate") {
		ani = document.createElementNS(svgNS, "animateTransform");
		ani.setAttribute("attributeName", "transform");
		ani.setAttribute("type", attr);
	} else if (attr == "filter") {
		ani = document.createElementNS(svgNS, "set");
		ani.setAttribute("attributeName", attr);
	} else {
		ani = document.createElementNS(svgNS, "animate");
		ani.setAttribute("attributeName", attr);
	}
	str = attr.replace("-", "");
	ani.setAttribute("attributeType", "XML");
	ani.setAttribute("id", str + index);
	if (attr == "filter") {
		ani.setAttribute("from", values[0]);
		ani.setAttribute("to", values[1]);
	} else {
		ani.setAttribute("keyTimes", keyTimes.join(";"));
		ani.setAttribute("values", values.join(";"));
	}
	ani.setAttribute("repeatCount", "1");
	ani.setAttribute("fill", fill);
	ani.setAttribute("additive", additive);
	ani.setAttribute("begin", begin);
	ani.setAttribute("dur", dur + "s");
	node.appendChild(ani);
	return ani;
}

$svg.on("click", onclickTriangles);
$triangles.each(function(index) {
	init(this, index);
});
