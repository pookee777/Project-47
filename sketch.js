const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Engine = Matter.Engine;
var engine,world;
var canvas;
var apprentice,aprentice;
var gImg,bImg;
var merlin,mImg;
var bile,poison;
var button1,button2,button;
var gameState = 0;
var magicImg,magics;
var poisonImg,poisonGroup;
var bile,bileImg,bileGroup;
var root,rootImg,rootGroup;
var mushroom,mushroomImg,mushroomGroup;
var dittany,dittanyImg,dittanyGroup;
var hair,hairImg,hairGroup;
var score = 0;
var scores = 0;
var rscores = 0;
var dscores = 0;
var bscores = 0;
var gameOver,start,win;
function preload()
{  
  bImg = loadImage("apprentice.png");
  gImg = loadImage("aprentice.png");
  mImg = loadImage("merlin.png");
  poisonImg = loadImage("poison.png");
  backImg = loadImage("background1.jpg");
  back1Img = loadImage("background.jpg");
  magicImg = loadImage("magic.png");
  bileImg = loadImage("armadillo bile.png");
  rootImg = loadImage("bitter root.png");
  mushroomImg = loadImage("leaping toadstool.png");
  dittanyImg = loadImage("dittany.png");
  hairImg = loadImage("unicorn hair.png");
  start = loadSound("start.mp3");
  gameOver = loadSound("gameover.mp3");
  win = loadSound("win.mp3");
}

function setup() 
{
  canvas  = createCanvas(2000,560);
  engine = Engine.create();
  world = engine.world;
  apprentice = createSprite(400,360,10,20);
  apprentice.addImage("apprentice",bImg);
  aprentice = createSprite(800,360,10,10);
  aprentice.addImage("aprentice",gImg);
  aprentice.scale = 1.3;
  merlin = createSprite(100,250,10,10);
  merlin.addImage("merlin",mImg);
  button1 = new Button();
  magics = createSprite(650,400,30,30);
  magics.addImage("magics",magicImg);
  magics.scale = 0.16;
  button = new Buttons();
  poisonGroup = new Group();
  bileGroup = new Group();
  rootGroup = new Group();
  mushroomGroup = new Group();
  dittanyGroup = new Group();
  hairGroup = new Group();
  Engine.run(engine);
  start.play();
}
function draw() 
{
  if(gameState === 0)
  {
    background(backImg);
    textFont("serif");
    textSize(35);
    stroke("black");
    strokeWeight(2.2);
    fill("white");
    text("Help Merlin By Gathering Ingredients For His Potion",250,height/4);
    text("Choose The Apprentice You Want To Play As",280,height/3);    
    button1.display();
    magics.visible = false;     
  }
  if(gameState === 1)
  {
    background(backImg);
    textFont("serif");
    textSize(35);
    stroke("black");
    strokeWeight(2.2);
    fill("white");
    text("We have to collect 2 boxes of armadillo bile, 3 bitter root flowers,",150,height/4); 
    text("5 dittany stems, 4 mushrooms and 3 strands of unicorn hair.",200,height/3);
    button.display();
    merlin.visible = false;
  }
  if(gameState === 2)
  {
    background(back1Img);
    spawnPoison();
    spawnBile();
    spawnDittany();
    spawnHair();
    spawnMushroom();
    spawnRoot();
    follow();
    magics.visible = true;
    merlin.visible = false;
    apprentice.visible = false;
    aprentice.visible = false;
  
    if(magics.isTouching(hairGroup))
    {
      hairGroup.destroyEach();
      score +=1;
    }
    if(score === 3)
    {
      hair.remove()
    }
    if(magics.isTouching(mushroomGroup))
    {
      mushroomGroup.destroyEach();
      scores += 1;
    }
    if(scores === 4)
    {
      mushroom.remove();
    }
    if(magics.isTouching(rootGroup))
    {
      rootGroup.destroyEach();
      rscores += 1;
    }
    if(rscores === 3)
    {
      root.remove();
    }
    if(magics.isTouching(bileGroup))
    {
      bileGroup.destroyEach();
      bscores += 1;
    }
    if(bscores === 2)
    {
      bile.remove();
    }
    if(magics.isTouching(dittanyGroup))
    {
      dittanyGroup.destroyEach();
      dscores += 1;
    }
    if(dscores === 5)
    {
      dittany.remove();
    }
    if(score ===3 && scores ===4 &&rscores ===3&&bscores ===2&&dscores ===5)
    {
      gameState = 4;
      win.play();
    }
    if(magics.isTouching(poisonGroup))
    {
      gameState = 3;
      gameOver.play();
    }
  }
  if(gameState === 3)
  {
    background(back1Img);
    textFont("serif");
    textSize(35);
    stroke("black");
    strokeWeight(2.2);
    fill("white");
    text("You Took The Poison By Mistake!!!☠☠💀💀",700,height/2);
    poisonGroup.destroyEach();
  }
  if(gameState === 4)
  {
    background(backImg);
    textFont("serif");
    textSize(55);
    stroke("black");
    strokeWeight(2.2);
    fill("white");
    text("You Were Successful In Collecting All The Ingredients",200,height/2);
    text("🎊🎉🎊🎉🎆🎇",width/3.5,height/1.5);
    poisonGroup.destroyEach();
    magics.visible = false;
    merlin.visible = true;
  }
  drawSprites();
}
function spawnPoison()
{
  if(frameCount%150 === 0)
  {
    var poison = createSprite(Math.round(random(100,1900)),Math.round(random(200,400)),20,20);
    poison.addImage("poison",poisonImg);
    poison.scale = 0.3;
    poisonGroup.add(poison);
  }
  if(frameCount%250===0)
  {
    poisonGroup.destroyEach();
  }
}
function spawnBile()
{
  if(frameCount%150 === 0)
  {
    bile = createSprite(Math.round(random(100,1900)),Math.round(random(200,400)),20,20);
    bile.addImage("bile",bileImg);
    bile.scale = 0.3;
    bileGroup.add(bile);
  }
  if(frameCount%250===0)
  {
    bileGroup.destroyEach();
  }
}
function spawnRoot()
{
  if(frameCount%150===0)
  {
    root = createSprite(Math.round(random(100,1900)),Math.round(random(200,400)),20,20);
    root.addImage("root",rootImg);
    root.scale = 0.3;
    rootGroup.add(root);
  }
  if(frameCount%250===0)
  {
    rootGroup.destroyEach();
  }
}
function spawnMushroom()
{
  if(frameCount%150===0)
  {
    mushroom = createSprite(Math.round(random(100,1900)),Math.round(random(200,400)),20,20);
    mushroom.addImage("mushroom",mushroomImg);
    mushroom.scale = 0.5;
    mushroomGroup.add(mushroom);
  }
  if(frameCount%250===0)
  {
    mushroomGroup.destroyEach();
  }
}
function spawnDittany()
{
  if(frameCount%150===0)
  {
    dittany = createSprite(Math.round(random(100,1900)),Math.round(random(200,400)),20,20);
    dittany.addImage("dittany",dittanyImg);
    dittany.scale = 0.6;
    dittanyGroup.add(dittany);
  }
  if(frameCount%250===0)
  {
    dittanyGroup.destroyEach();
  }
}
function spawnHair()
{
  if(frameCount%150===0)
  {
    hair = createSprite(Math.round(random(100,1900)),Math.round(random(200,400)),20,20);
    hair.addImage("hair",hairImg);
    hair.scale = 0.35;
    hairGroup.add(hair);
  }
  if(frameCount%250===0)
  {
    hairGroup.destroyEach();
  }
}
function follow()
{
  magics.x = mouseX;
  magics.y = mouseY;
}