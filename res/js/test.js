var player;
var wallSpr;
var river;

function setup() {
	createCanvas(1000, 600);
	player = new Character();
	player.show();
	//river = new obj();
	//river.show();
}

function draw() {
  background(50);

  if(keyIsDown(UP_ARROW)) {
  	spr.position.y -= 5;
  }
  if(keyIsDown(DOWN_ARROW)) {
  	spr.position.y += 5;
  }
  if(keyIsDown(LEFT_ARROW)) {
  	spr.position.x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)) {
  	spr.position.x += 5;
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
  		//var s = "X: " + this.x + " Y: " + this.y;
  		//text(s, this.x, this.y - 10);
	}

	this.interact = function() {
	}
}

/*function obj() {
	this.type = "WALL";
	this.show() {
		var wallSpr = createSprite(1000, 100, 0, 100);
		wallSpr.shapeColor = color(149, 149, 149);
	}
}*/
