
$(function(){
   var nextPoint;
   var tempPoint;
   var prevPoint  = $("#first");



$(document).keypress(function(e) {


   if(e.keyCode === 37 || e.which ===37){
    console.log("left");

    prevPoint.css("background-color", "#ddd");
    nextPoint = prevPoint.prev();
    tempPoint = nextPoint; 
    prevPoint = tempPoint;
    nextPoint.css("background-color", "#777");

    }//left
 /*  if(e.keyCode === 38 || e.which ===38){ 
   console.log("up");
   nextPoint = $("#first").next();
   nextPoint.css("background-color", "#777");
   }//up
   if(e.keyCode === 39 || e.which ===39){
    console.log("right");
    nextPoint = $("#first").next();
    nextPoint.css("background-color", "#777");

    }//right
   if(e.keyCode === 40 || e.which ===40){
    console.log("down");
     nextPoint = $("#first").next();
     nextPoint.css("background-color", "#777");
    }//down*/


});
}
)
//nextPoint.css("background-color", "#777");
//$("#first").css("background-color", "#ddd");

