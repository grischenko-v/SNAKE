
$(function(){
   var nextPoint;
   var tempPoint;
   var prevPoint  = $("#first");
  
   var rowSize = 9;
   var currentPositionX = 4; 
   var currentPositionY = 7;

$(document).keypress(function(e) {


   if(e.keyCode === 37 || e.which ===37){
    console.log("left");

    prevPoint.css("background-color", "#ccc");
    nextPoint = prevPoint.prev();
    if(nextPoint.length == 0)console.log(nextPoint);
    
    if(currentPositionX <=0 )currentPositionX--;

    tempPoint = nextPoint; 
    prevPoint = tempPoint;
    nextPoint.css("background-color", "#777");

    }//left
 /*  if(e.keyCode === 38 || e.which ===38){ 
   console.log("up");
   nextPoint = $("#first").next();
   nextPoint.css("background-color", "#777");
   }//up
   */
   if(e.keyCode === 39 || e.which ===39){
    console.log("right");
    
    prevPoint.css("background-color", "#ccc");
    nextPoint = prevPoint.next();
    tempPoint = nextPoint; 
    prevPoint = tempPoint;
    nextPoint.css("background-color", "#777");
    }//right
 /*  if(e.keyCode === 40 || e.which ===40){
    console.log("down");
     nextPoint = $("#first").next();
     nextPoint.css("background-color", "#777");
    }//down*/


});
}
)
//nextPoint.css("background-color", "#777");
//$("#first").css("background-color", "#ddd");

