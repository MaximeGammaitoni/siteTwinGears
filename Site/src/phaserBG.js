var game;
window.onload =init()
function init()
{
	var height="100%";
	var width="100%";
	var game = new Phaser.Game(width, height, Phaser.CANVAS, "canvas", {preload: preload, create: create, update: update});
	

	//PUBLIC SPRITE
	
	function preload()
	{ 
		
	}
	function create()
	{
		game.stage.backgroundColor = "#4488AA";
		var graphics = game.add.graphics(100, 100);

    // set a fill and line style
    graphics.beginFill(0xFF3300);
    graphics.lineStyle(10, 0xffd900, 1);
    
    // draw a shape
    graphics.moveTo(50,50);
    graphics.lineTo(250, 50);
    graphics.lineTo(100, 100);
    graphics.lineTo(250, 220);
    graphics.lineTo(50, 220);
    graphics.lineTo(50, 50);
    graphics.endFill();
    
    // set a fill and line style again
    graphics.lineStyle(10, 0xFF0000, 0.8);
    graphics.beginFill(0xFF700B, 1);
    
    // draw a second shape
    graphics.moveTo(210,300);
    graphics.lineTo(450,320);
    graphics.lineTo(570,350);
    graphics.quadraticCurveTo(600, 0, 480,100);
    graphics.lineTo(330,120);
    graphics.lineTo(410,200);
    graphics.lineTo(210,300);
    graphics.endFill();
    
    // draw a rectangle
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.drawRect(50, 250, 100, 100);
    
    // draw a circle
    graphics.lineStyle(0);
    graphics.beginFill(0xFFFF0B, 0.5);
    graphics.drawCircle(470, 200, 200);
    graphics.endFill();

    graphics.lineStyle(20, 0x33FF00);
    graphics.moveTo(30,30);
    graphics.lineTo(600, 300);

    window.graphics = graphics;


	}
	function update()
	{
		
	}
}
//Reajustement de l'image en fonction de la taille de l'ecran ----------
/*function adjustImageToScreenSize(image , screenRatio , isCircle , screenRatioY) // (image etant l'instance de l'objet Sprite par exemple gearIcon, screenRatio et le reajustement entre 0 et 1, isCircle est un boléan utiliser si la hauteur de l'image et egale a la largeur si ca n'est pas le cas il faudra utiliser le parametre screenRatioY pour reajuste la taille de l'image en hauteur)
{
	if(isCircle)
	{
		if(window.innerWidth<window.innerHeight)
		{
			image.width = window.innerWidth*screenRatio ;
			image.height =image.width;
		}
		else
		{
			image.height = window.innerHeight*screenRatio ;
			image.width =image.height;
		}
	}
	else
	{
		image.width = window.innerWidth*screenRatio;
		image.height =window.innerHeight*screenRatioY;
	}
}*/
