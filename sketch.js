var gameState = 0;

var database;

var form, player, game;

var dog, dogImg1, dogImg2;

var milk1, milk2, milk3, milk4, milk5, milk6, milk7, milk8, milk9, milk10;
var milkImage;

function setup(){
  createCanvas(600,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("white")
  //text("x :"+mouseX+"y :"+mouseY,100, 100)
  drawSprites();
}