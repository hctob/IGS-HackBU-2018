var player;

function setup() {
	createCanvas(400, 600);
	player = new Character();
	player.show();
}

function draw() {
  background(50);

  if(mouseIsPressed) {
  	spr.position.x = (mouseX);
  	spr.position.y = (mouseY);
  }
  drawSprites();
}

function Character() {
	this.x;
	this.y;

	this.show = function() {
		spr = createSprite(width/2, height/2, 40, 40);
  		spr.shapeColor = color(255, 0, 0);
  		//text("GeebLord", spr.position.x, spr.positon.y + 10);
  		this.x = spr.position.x;
  		this.y = spr.position.y;
	}

	this.interact = function() {
	}
}

function Wall() {

}
