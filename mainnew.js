
var first = document.getElementById('first');
var grid = document.getElementsByClassName('grid')[0];
var fps = 1000/60;
var frameNum = 0;
var direction = "UP";

function simpleMove(){  
   if(frameNum > fps){
	   first.style.backgroundColor = "#ccc";       

       first = first.nextElementSibling != null ? first.nextElementSibling : grid.firstElementChild;


       first.style.backgroundColor="#777";
       frameNum=0;
   } else  frameNum++;
     requestAnimationFrame(simpleMove);
};


function rightMove(element){

};

function leftMove(element){

};

function upMove(element){

};

function downMove(element){

};

function cooseDir(e){   
   switch(e.key){
    case "ArrowUp": direction = "UP"; console.log("UP"); break;
    case "ArrowDown": direction = "DOWN"; console.log("DOWN"); break;
    case "ArrowRight": direction = "RIGHT"; console.log("RIGHT"); break;
    case "ArrowLeft" : direction = "LEFT"; console.log("LEFT"); break;
   }
}

function init(){
    
   document.addEventListener("keydown", cooseDir, false);

   requestAnimationFrame(simpleMove);   

};

init();