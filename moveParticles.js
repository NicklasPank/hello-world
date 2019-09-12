
counter=0;

function doFirst() {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d'); //no var b4 canvas so now its a global variable
	//canvas.fillRect(100, 100, 300, 400); //strokeRect for no color inside
	//canvas.clearRect(150, 150, 100, 100); //Basically a rectangle eraser
	canvas.fillRect( 100, 100, 200, 200);
	var intervalID = window.setInterval(main, 50);
}

function Particle(type, size) {
	this.type = type;
	this.size = size;
}

function createParticles() {
	var particleArr = new Array(5);
	particleArr[0] = new Particle("circle", 6);
	particleArr[1] = new Particle("circle", 3);
	particleArr[2] = new Particle("circle", 10);
	particleArr[3] = new Particle("square", 4);
	particleArr[4] = new Particle("square", 8);
	return particleArr;
}

function main() {
	counter++;
	var posX = new Array(0, 2, 2);
	var posY = new Array(0, -2, 2);
	var ind = (counter%3); //"shake" particles
	var particles = createParticles();
	canvas.clearRect(0, 0, 1000, 1000); //clear screen
	//canvas.fillRect(0,0,20,20);
	for (i=0; i<particles.length; i++) {
		if (particles[i].type == "circle") {
			canvas.fillStyle = "blue";
			canvas.beginPath();
			canvas.arc(i*50 + 200 + posX[ind], i*25 + 300 + posY[ind], particles[i].size, 0, 2*Math.PI);
			canvas.fill();
		}
		else if (particles[i].type == "square") {
			canvas.fillStyle = "red";
			canvas.fillRect(i*25 + 500 + posX[ind], i*50 + 30 + posY[ind], particles[i].size, particles[i].size);
		}
	}
}

window.addEventListener("load", doFirst, false);
