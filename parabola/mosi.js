var pos, pos2;
var sudut;
var pi = 3.1415926535897932384626433;
var v0;
var t;
var g;
var lines = [];
var m1;
var m2;
var posKotak;

function setup(){
	createCanvas(1300, 800);
	frameRate(30);
	
	pos = [100, 650];
	pos2 = [100, 650];
	sudut = pi/4; //45 derajat
	v0 = 10; //kecepatan awal
	t = 0; //waktu awal
	g = 0.098; //percepatan gravitasi
	m1 = 1; //massa bola
	m2 = 2; //massa kotak
	posKotak = 1160;
	lines.push([[pos2[0], pos2[1]], [pos[0], pos[1]]]);
	
}

function draw(){
	background(0);

	fill(255);
	circle(pos[0], pos[1], 20);
	
	pos[0] = 100 + getKecepatanX(v0, sudut)*t;
	pos[1] = v0*sin(sudut)*t - 0.5*g*t*t;
	pos[1] = 650 - pos[1];
	
	lines.push([[pos2[0], pos2[1]], [pos[0], pos[1]]]);
	pos2[0] = pos[0];
	pos2[1] = pos[1];
	

	
	if(pos[1] > 800){
		pos = [100, 650];
		pos2 = [100, 650];
		lines = [];
		t = 0;
		posKotak = 1160;
	}
	drawLine();
	fill('#654321');
	rect(0, 700, 1300, 100);
	kotak(getKecepatanX(v0, sudut));

	t++;
	
}

function kotak(v1){
	fill('#ccccff');
	rect(posKotak, 650, 50, 50);
	if(pos[0] >= 1160){
		var v = (m1*v1 + m2*0 - m1*(0.9*v1))/m2;
		posKotak = 1160 + v*t;	
	}
	
}

function drawLine(){
	for(var i = 0; i<lines.length; i++){
		stroke(255);
		line(lines[i][0][0], lines[i][0][1], lines[i][1][0], lines[i][1][1]);
		//console.log(lines[i]);
	}
}

function getKecepatanX(v0, theta){
	return v0*cos(theta);
}

function getKecepatanY(v0, theta, g, t){
	return v0*sin(theta) - g*t;
}