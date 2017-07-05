
$(function(){
   var nextPoint;
   var tempPoint;
   var prevPoint  = $("#first");
  
   var rowSize = 8;
   var currentPositionX = 3; 
   var currentPositionY = 6;

$(document).keypress(function(e) {

   if(e.keyCode === 37 || e.which ===37){
    console.log("left");
    prevPoint.css("background-color", "#ccc");      
    if(currentPositionX > 0  &&  currentPositionX <= rowSize){
        currentPositionX--;  
        nextPoint = prevPoint.prev();
    }else{
    	currentPositionX = rowSize ;
    	for(var i = 0; i < rowSize ; i++) nextPoint = nextPoint.next();
    } 
    i=0;
    console.log(currentPositionX);
    tempPoint = nextPoint; 
    prevPoint = tempPoint;
    nextPoint.css("background-color", "#777");
    }//left
    if(e.keyCode === 39 || e.which ===39){
   	console.log("right");
    prevPoint.css("background-color", "#ccc");
     if(currentPositionX >= 0  &&  currentPositionX < rowSize){
        currentPositionX++;  
        nextPoint = prevPoint.next();
      }else{
    	currentPositionX = 0;
    	for(var i = 0; i < rowSize ; i++) nextPoint = nextPoint.prev();
      } 
      i=0;
      console.log(currentPositionX);
      tempPoint = nextPoint; 
      prevPoint = tempPoint;
      nextPoint.css("background-color", "#777");
    }//right



   if(e.keyCode === 38 || e.which ===38){ 
    console.log("up");
    prevPoint.css("background-color", "#ccc");

     if(currentPositionY >= 0  &&  currentPositionY < rowSize){
        currentPositionY++;  
        for(var i = 0; i <= rowSize ; i++){ 
            if(nextPoint) nextPoint =  nextPoint.prev();
            else nextPoint= prevPoint.prev();    
        }
      }else{   
    	for(var j = 0; j <= (rowSize+1) * 8 - 1; j++) nextPoint = nextPoint.next();
    	currentPositionY = 0;	      
      } 
      j=0; i=0;
      console.log(currentPositionY);
      tempPoint = nextPoint; 
      prevPoint = tempPoint;
      nextPoint.css("background-color", "#777");
   }//up

 
   if(e.keyCode === 40 || e.which ===40){
     console.log("down");
     prevPoint.css("background-color", "#ccc");
     if(currentPositionY > 0  &&  currentPositionY <= rowSize){
        currentPositionY--;  
        for(var i = 0; i <= rowSize ; i++){ 
            if(nextPoint) nextPoint =  nextPoint.next();
            else nextPoint= prevPoint.next();    
        }
      }else{   
    	for(var j = 0; j <= (rowSize+1) *8 - 1; j++) nextPoint = nextPoint.prev();
    	currentPositionY = rowSize;	      
      } 
      j=0; i=0;
      console.log(currentPositionY);
      tempPoint = nextPoint; 
      prevPoint = tempPoint;
      nextPoint.css("background-color", "#777");
    }//down


});
}
)

