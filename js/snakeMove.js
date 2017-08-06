function snakeControl(){
    return{
      rightMove: function (element){     
                   if(element.currentCol < colSize){
                      element.currentCol++; 
                      element.path = element.path.nextElementSibling;  
                   }else while(element.currentCol !== 0) {
                      element.currentCol--;     
                      element.path = element.path.previousElementSibling;
                   }                   
                   return element;
                 },
      leftMove:  function (element){
                   if(element.currentCol > 0){
                      element.currentCol--; 
                      element.path = element.path.previousElementSibling;  
                   }else while(element.currentCol !== colSize) {
                      element.currentCol++;     
                      element.path = element.path.nextElementSibling;
                   }                          
                   return element;
                 },
      upMove:    function upMove(element){
                   var i = 0;
                   if(element.currentRow > 0){
                      while (i <= rowSize){ 
                        i++;     
                        element.path = element.path.previousElementSibling;  
                      }
                      element.currentRow--;
                   }else{
                      while (i <= rowSize * (rowSize +  1) - 1){ 
                        i++;
                        element.path = element.path.nextElementSibling;
                      }
                      element.currentRow = 8;
                   }   
          
                   return element;
                 },
      downMove:  function downMove(element){
                   var i = 0;
                   if(element.currentRow < rowSize){
                     while (i <= rowSize){ 
                     i++;      
                     element.path = element.path.nextElementSibling;  
                     }
                     element.currentRow++;
                   } else{
                      while (i <= rowSize*(rowSize + 1) - 1){ 
                       i++;
                       element.path = element.path.previousElementSibling;
                      }
                      element.currentRow = 0;
                   }   
                   return element;
                 }
    }
};
