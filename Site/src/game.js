/*Variable Global
var game;
window.onload =init()
function init()
{
	var height="100%";
	var width="100%";
	var game = new Phaser.Game(width, height, Phaser.CANVAS, "canvas", {preload: preload, create: create, update: update});
	
	/*window.addEventListener("resize", function(){
		var height=window.innerHeight;
		var width=window.innerWidth;
		game.width = width;
		game.height = height;
	});

	//PUBLIC SPRITE
	
	function preload()
	{ 
		game.load.image("gearIcon","assets/img/gear.png")//creation de l'image avec l'id "gearIcon" et son url.
		
		console.log("preload OK");
	}
	function create()
	{
		game.stage.backgroundColor = "#4488AA"; // change la couleur de fond du canvas
		game.gearIcon= game.add.sprite(window.innerWidth/2,window.innerHeight/2,"gearIcon");//ajout de l'image avec l'id gearIcon
		game.gearIcon.anchor.x=0.5;
		game.gearIcon.anchor.y=0.5;
		adjustImageToScreenSize(gearIcon,0.5,true,0.25);
		//gearIcon.scale.x = 1 +(window.innerWidth / 50 *100); 
		console.log(gearIcon.width * (window.innerWidth/2));
	}
	function update()
	{
		gearIcon.angle+= game.time.elapsedMS /10; 
	}
}
//Reajustement de l'image en fonction de la taille de l'ecran ----------
function adjustImageToScreenSize(image , screenRatio , isCircle , screenRatioY) // (image etant l'instance de l'objet Sprite par exemple gearIcon, screenRatio et le reajustement entre 0 et 1, isCircle est un boléan utiliser si la hauteur de l'image et egale a la largeur si ca n'est pas le cas il faudra utiliser le parametre screenRatioY pour reajuste la taille de l'image en hauteur)
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
}
*/
//VAR GLOBAL
var AssetsLoaded = false;

$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);
   	
    $({deg: 0}).animate({deg: angle}, {
      duration: duration,
      easing: easing,
      canRotate : true,

      step: function(now) {
        if(!AssetsLoaded)
        	$elem.css({
          		transform: 'rotate(' + now*5 + 'deg)'
         	});
        else
        	$elem.css({
          		transform: 'rotate(' + 0 + 'deg)'
         	});
      },
      complete: complete || $.noop
    });
  });
};
function roundingGear(){
	var gearElt1 = $("#gear-icon-1");
	var gearElt2 = $("#gear-icon-2");

 	var $elem = $('#gear-icon-1');
 	var angle = 360;
   	gearElt1.animateRotate(360,40000,"linear");
   	gearElt2.animateRotate(360,40000,"linear");



	//gearElt2.css({transform: "rotate(" + 360 + "deg)"});
}

function preload(){

	var isLoaded = 0;
	var imgElts = document.querySelectorAll("#container img");

	roundingGear();

	console.log("NOMBRE D IMAGE: " + imgElts.length);
	for(i=0; i < imgElts.length; i++){
		imgElts[i].addEventListener("load", function(){
			isLoaded++;
			console.log("IMAGE CHARGEE : " + isLoaded)
			if(isLoaded ==imgElts.length){
				console.log("loaded");
				init()
			}
		});
	}
	
}
function init()
{
	
   	AssetsLoaded=true;
}

preload();