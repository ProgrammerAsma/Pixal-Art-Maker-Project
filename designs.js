


// Select color input
//const  tableCanvas = document.querySelector('.pixelCanvas');
//var Color = document.querySelector('.colorPicker');
// Select size input
function makeGrid(event) { 

    event.preventDefault();
//Defining  the variables:
    const Height = document.getElementById("inputHeight").value;
    const  Width =  document.getElementById("inputWidth").value;
    const  tableCanvas = document.getElementById("pixelCanvas"); 

    tableCanvas.innerHTML = "";

    
    //.submit(function( event ) {
    
    //console .log('Height: ' + height + 'and width:' + width);

//for loop
   for (var i =0; i < Height; i++){
        var row = document.createElement("tr");
        for (var j = 0; j < Width; j++){
             var cell = document.createElement("td");
             cell.addEventListener("click",function (event){
             var pickedcolor = document.getElementById("colorpicker").value;
             event.target.style.backgroundcolor = pickedcolor; 
              })
             row.appendChild(cell);
     //console.log(width + "," + height );
     }
         tableCanvas.appendChild(row);
    }
}
//function colorCell(event)
//{
    //if (event.target.nodeName == "td"){
       // var pickedcolor = document.getElementById("colorpicker").value;
       // event.target.style.backgroundcolor = pickedcolor;
    //}

//}
