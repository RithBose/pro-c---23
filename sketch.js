	var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
	var packageBody,ground
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	function preload()
	{
		helicopterIMG=loadImage("helicopter.png")
		packageIMG=loadImage("package.png")
	}

	function setup() {
		createCanvas(800, 700);
		rectMode(CENTER);
		

		packageSprite=createSprite(width/2, 200, 10,10);
		packageSprite.addImage(packageIMG)
		packageSprite.scale=0.2

		helicopterSprite=createSprite(width/2, 200, 10,10);
		helicopterSprite.addImage(helicopterIMG)
		helicopterSprite.scale=0.6

		groundSprite=createSprite(width/2, height-35, width,10);
		groundSprite.shapeColor=color(255)


		engine = Engine.create();
		world = engine.world;

		packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:false,restitution:0.3});
		World.add(world, packageBody);
		

		//Create a Ground
		ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		World.add(world, ground);

		box1= createSprite(400,645,180,20)  
		box1.shapeColor="red"
		BoxBody1= Bodies.rectangle(400,640,230,45,{isStatic:true})
	    World.add(world,BoxBody1)
		
		box2= createSprite(300,635,20,50)
		box2.shapeColor= "red"
		box2Body= Bodies.rectangle(350,630,40,70)
		World.add(world,box2Body)
		box3= createSprite(480,635,20,50)
        box3Body= Bodies.rectangle(530,630,40,70)
		box3.shapeColor="red"
		Engine.run(engine);
	

	}
	function draw() {
	rectMode(CENTER);
	
	background(0);
	keyPressed();
	drawSprites();
	
	}

	function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
		packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	}
	}



