var player;

function setup() {
	createCanvas(400, 600);
	player = new Character();
	player.show();
}

function draw() {
	background(220);
	drawSprites();

}

function Character() {
	this.x = 10;
	this.y = 10;
	this.xspeed = 0;
	this.yspeed = 0;

	this.changeDir = function(x,y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.show = function() {
		fill(100);
	}
}

function keyPressed() {

}