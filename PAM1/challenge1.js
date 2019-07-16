

// Select size input 
function makeGrid(event) {
//we need to use (preventDefalt() )to prevent the loding of the bage,
//when we click submit button,*(Prevent submit button Default).
    event.preventDefault();
    //Defining  the variables:
    //In making the table: we need width,height value and the Canvas:
    const Height = document.getElementById("inputHeight").value;
    const Width = document.getElementById("inputWidth").value;
    const tableCanvas = document.getElementById("pixelCanvas");
// before anything we need to clear it 
    tableCanvas.innerHTML = "";

    //we used loop to create (cells;rows and columns)
    // starting with rows ..
    // here,it refers to the length of the cells array 
    //currently being looped over
    for (var hRow = 0;hRow  < Height;hRow ++) {
        var rowRow = document.createElement("tr");
        for (var wColumn = 0; wColumn < Width; wColumn++) {
            var tableCells = document.createElement("td");
            tableCells.addEventListener("click", function () {
                var color = document.getElementById("colorPicker").value;
                this.style.backgroundColor = color;
            })
// passing the loop of(rows&columns)inside each row 
            rowRow.appendChild(tableCells);
         //insert all the loop in side tablecanvas  
        }
        tableCanvas.appendChild(rowRow);
    }
}     