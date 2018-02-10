var player;

function setup() {
	createCanvas(400, 600);
	player = new Character();
	player.show();
}

function draw() {
  background(50);
  spr.velocity.x = (mouseX - spr.position.x) * 0.2;
  spr.velocity.y = (mouseY - spr.position.y) * 0.2;
  drawSprites();
}

function Character() {

	this.show = function() {
		spr = createSprite(width/2, height/2, 40, 40);
  		spr.shapeColor = color(255, 0, 0);
	}
}
