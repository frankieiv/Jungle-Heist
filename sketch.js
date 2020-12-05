var gameState = "level0"
var jake, jakeImage
var background
var counter = 0;


function preload(){
  jakeImage = loadImage("images/Jake.png")
  Alien1Image = loadAnimation("images/Alien1.PNG","images/Alien2.PNG","images/Alien3.PNG","images/Alien4.PNG")
  Alien2Image = loadImage("images/Alien2.PNG")
  Alien3Image = loadImage("images/Alien3.PNG")
  Alien4Image = loadImage("images/Alien4.PNG")
  Alien8Image = loadImage("images/Alien8.PNG")
  jungleImage = loadImage("images/Jungle.jpg")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background = createSprite(400,300,0,0)
  background.addImage(jungleImage)
  background.scale = 1.5
  background.visible = false

  jake = createSprite(278,366,50,50)
  jake.addImage(jakeImage) 
  jake.scale = 0.5
  jake.visible = false

  alien = createSprite(100,360,50,50)
  alien.addAnimation("running",Alien1Image)
  alien.visible = false

  changePage=createButton("Change");
  changePage.position(800,95);

  t1 = createSprite(200,400,60,60)
  t1.visible = false
  t1.shapeColor = "red"
  t2 = createSprite(200,400,60,60)
  t2.visible = false
  t2.shapeColor = "green"
  t3 = createSprite(200,400,60,60)
  t3.visible = false
  t3.shapeColor = "blue"

  t4 = createSprite(200,400,60,60)
  t4.visible = false
  t4.shapeColor = "pink"


  //groups
  treeGroup = createGroup ()
}

function draw() {
  
  //introduction - level 0
  if(gameState==="level0"){ 
    changePage.mouseClicked(()=>{
      console.log(counter)
      counter +=1
      switch(counter){
        case 1 :  t1.visible=true;
        break;
        case 2 : t2.visible=true;
        t1.visible=false;
        break;
        case 3 : t2.visible=false;
        t1.visible=false;
        t3.visible = true
        break;
        case 4 : gameState = "level1"
        console.log(gameState)
        changePage.hide()
        break;
        default : console.log("error")
        break;
        }
      });

    }
  
  //level 1 - tutorials - instruction
  if(gameState==="leve1"){
    changePage.hide()
    t1.visible = false
    t2.visible = false
    t3.visible = false

    t4.visible = true

    if(keyDown("space")){
      gameState = "level2"
    }
  }
  
  
  //level 2 - trees
  if(gameState==="leve1"){
    changePage.hide()
    background.visible = true
    alien.visible = true
    jake.visible = true



    spawnTrees()
  }
  


  //level 3 -flamethrower



  // level 5 - end
  
  drawSprites();
}

function spawnTrees(){
  if(frameCount%111===0){
    var trees = createSprite(displayWidth, displayHeight - 101, 50, 100)
    trees.shapeColor = "black"
    trees.velocityX = -7
    trees.lifetime = 800
    //images for tree
    treeGroup.add(trees)
  }
}










