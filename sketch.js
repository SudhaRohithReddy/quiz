var form,game,player,questions;
var database;
var gameState = 0;
var score = 0;
var timer;  
var timeLeft = 15;
var allQuestions,userAnswers;
var qNum,question;
var counter = 15;
var ques;
var bgImage;

function preload(){
    bgImage = loadImage("quizBG2.jpg");

}
function setup(){
    canvas = createCanvas(windowWidth,windowHeight); 
    database = firebase.database();
    game = new Game();
    game.start();
    var timer = createElement('h1');
    timer.html(timeLeft-counter);
    timer.position(windowWidth/2-40,70);
    function timeIt(){
        if(gameState === 1){
            counter = counter+1;
            timer.html(timeLeft-counter);
        }
    }
    //secInterval(timeIt,1000);
}
function draw(){
background(bgImage);
if(gameState === 1){
    game.play();
    textSize(40);
    text("SCORE: "+player.score,windowWidth/2+250,windowHeight/2-200);
}
if(gameState === 2){
//game.end();
}
}