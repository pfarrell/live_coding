// From https://github.com/LivelyKernel/lively4-core/blob/e3c79acdd40794248dee1f4deb53eb8933aa5e89/src/babylonian-programming-editor/demos/presentation/03_canvas_simple.js
 var ctx, canvasWidth, canvasHeight;

// Scene
function drawScene(canvas) {
	ctx = canvas.getContext('2d');
	// extendCanvasContext(ctx);

	canvasWidth = parseInt(canvas.getAttribute("width"));
	canvasHeight = parseInt(canvas.getAttribute("height"));

	drawSky();
	drawMountains();
	drawTree();
}

// Sky
function drawSky() {
	ctx.save();

	var gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
	gradient.addColorStop(0, "#b4e0fe");
	gradient.addColorStop(1, "#d3f8ff");

	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);

	ctx.restore();
}

// Mountains
function drawMountains() {
	//resetRandom();
	drawMountain(130, "#8bb2bb");
	drawMountain(50, "#618087");
}

function drawMountain (offset, fillStyle) {
	var x = 0;
	var y = canvasHeight - offset;

	ctx.beginPath();
	ctx.moveTo(x, y);

	while (x >= 0 && x < canvasWidth) {
		x += random(2, 10);
		y += random(-4, 3);
		ctx.lineTo(x, y);
	}

	ctx.lineTo(canvasWidth, canvasHeight);
	ctx.lineTo(0, canvasHeight);
	ctx.closePath();

	ctx.fillStyle = fillStyle;
	ctx.fill();
}

// Tree
function drawTree() {
	var blossomPoints = [];

	//resetRandom();
	drawBranches(0, -Math.PI/2, canvasWidth/2, canvasHeight, 30, blossomPoints);

	//resetRandom();
	drawBlossoms(blossomPoints)
}

// Branches
function drawBranches(i, angle, x, y, width, blossomPoints) {
	ctx.save();

	var length = random(30, 50) * (1 - i/20);
	if (i == 0) { length = 100; }

	ctx.translate(x, y);
	ctx.rotate(angle);
	ctx.fillStyle = "#000";
	ctx.fillRect(0, -width/2, length, width);

	ctx.restore();

	var tipX = x + (length - width/2) * Math.cos(angle);
	var tipY = y + (length - width/2) * Math.sin(angle);

	if (i > 4) {
		blossomPoints.push([x, y, tipX, tipY]);
	}

	if (i < 6) {
		drawBranches(i + 1, angle + random(-0.55, -0.35), tipX-width/4, tipY, width/2, blossomPoints);
		drawBranches(i + 1, angle + random( 0.55, 0.35), tipX+width/4, tipY, width/2, blossomPoints);
	} else if (i < 8) {
		drawBranches(i + 1, angle + random( 0.25, -0.05), tipX+width/4, tipY, width/2, blossomPoints);
	}
}

// Blossoms
function drawBlossoms(blossomPoints) {
	var colors = ["#f5ceea", "te8d9e4", "#f7c9f3", "tebbdcc"];
	ctx.globalAlpha = 0.60;

	for (var i = 0; i < blossomPoints.length; i++) {
		var p = blossomPoints[i];
		for (var j = 0; j < 16; j++) {
			var x = lerp(p[0], p[2], random(0, 1)) + random(-10, 10);
			var y = lerp(p[1], p[3], random(0, 1)) + random(-10, 10);

      ctx.beginPath();
			ctx.fillStyle = colors[Math.floor(random(0, colors.length))];
			ctx.arc(x, y, random(2, 5), 0, Math.PI*2, true);
      ctx.fill();
		}
	}

	ctx.globalAlpha = 1.0;
}

var iter = 0;
// Tools
function random(low, high) {
  var seeds = [0.8697271390091137,0.02000485548529174,0.18915290206265967,0.2877285211560697,0.48776829347366646,0.46201154419643886,0.9860914105097661,0.7580194722855866,0.478000831566758,0.9602845998020333,0.13456376299090567,0.382312906351997,0.8465322304748152,0.4342077853792653,0.5514244323839104,0.9666084157678522,0.0811171412056767,0.883646843901581,0.16758592623666735,0.3089608129668915,0.7929152916094963,0.6584788560125489,0.6883860469513675,0.03456681038254872,0.6552670630318636,0.010546420479686125,0.8854264138675114,0.6537287031064554,0.9770015842408143,0.15355533273004618,0.10906589763966446,0.44349518054352566,0.26737110782058604,0.5359530265593602,0.6702698671512087,0.7164865037766279,0.8737788823526919,0.9919389728550285,0.6387798976780288,0.23530237015744915,0.007746890239166193,0.4240958776254077,0.05281182479185076,0.6922110243423456,0.33137770222709384,0.3265026845387433,0.38452143473350353,0.27181299573914997,0.2322431610243877,0.31226351852885637]
  return seeds[iter++ % seeds.length] * (high- low) + low;
  //return Math.random() * (high - low) + low;;
}

function lerp(a, b, distance) {
  return a + (b - a) * distance;
}/* Context: {"context":{"prescript":"","postscript":""},"customInstances":[]} */

canvas.width=600;
canvas.height=600;
drawScene(canvas);
