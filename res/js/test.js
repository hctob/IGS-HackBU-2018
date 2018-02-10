var player;
var wallSpr;
var river;

function setup() {
	createCanvas(windowWidth, 800);
	player = new Character();
	player.show();
	//river = new obj();
	//river.show();
}

function draw() {
  background(132, 200, 130);

  if(keyIsDown(UP_ARROW) && spr.position.y > 20) {
  	spr.position.y -= 5;
  }
  if(keyIsDown(DOWN_ARROW) && spr.position.y < 800) {
  	spr.position.y += 5;
  }
  if(keyIsDown(LEFT_ARROW) && spr.position.x > 30) {
  	spr.position.x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW) && spr.position.x < windowWidth) {
  	spr.position.x += 5;
  }

  //spr.position.x = constrain(spr.position.x, x, windowWidth);
  //spr.position.y = constrain(spr.position.y, y, windowHeight);

  drawSprites();
}

function Character() {
	this.show = function() {
		spr = createSprite(width/2, height/2, 40, 40);
		spr.position.x = constrain(spr.position.x, 0, 800);
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
