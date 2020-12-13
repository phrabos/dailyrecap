
//selectors
const resetBtn = document.querySelector(".resetBtn");
const submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector(".form");
const tBody = document.querySelector(".tBody");
const tRow = document.querySelector(".tRow");

// event listeners
resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    alert("reset clicked");
    form.reset();
} );

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    alert("submit clicked");
    
    function populateRow (date, RHR, HRV, temp, calIn, calOut, wgt, fat, distance, sleepHrs, BP) {
        //create table row
        const addRow = document.createElement("tr");
        addRow.classList.add("tRow")
        
        //set values from input form
        date = document.getElementById("date").value;
        RHR = document.getElementById("RHR").value;
        HRV = document.getElementById("HRV").value;
        temp = document.getElementById("temp").value;
        calIn = document.getElementById("calIn").value;
        calOut = document.getElementById("calOut").value;
        wgt = document.getElementById("weight").value;
        fat = document.getElementById("fat").value;
        distance = document.getElementById("distance").value;
        sleepHrs = document.getElementById("sleep").value;
        BP = document.getElementById("BP").value;

        //create table data from inputs array 
        const inputs = [date, RHR, HRV, temp, calIn, calOut, wgt, fat, distance, sleepHrs, BP] 
        for (i=0; i<inputs.length; i++){ 
            const addData = document.createElement("td");
            addData.innerText = inputs[i];
            addRow.appendChild(addData);
        }

        
        //append row to table
        tBody.appendChild(addRow);

        //add delete button to row
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "X"
        deleteButton.classList.add("deleteBtn");
        addRow.appendChild(deleteButton);

        

        };

        populateRow();
   
 });

 document.querySelector(".deleteBtn").addEventListener("click", (event) => {
    event.preventDefault();
    alert("x clicked");
    document.querySelector(".tRow").remove();
 });

`/*  document.querySelector(".deleteBtn").addEventListener("click", (event) => {
    event.preventDefault();
    alert("x clicked");
    document.querySelector(".tRow").remove();
}); */ 
/* document.querySelector(".deleteBtn").forEach(item => {
    item.addEventListener("click", (event) => {
 event.preventDefault();
 alert("x clicked");
 document.querySelector(".tRow").remove();
})}); */

/*  tRowAll.forEach(item => {
    item.addEventListener("dblclick", (event) => {
 event.preventDefault();
 alert("row clicked");
})}); */


/* function populateRow () {
//create table row
const addRow = document.createElement("tr");

//create table data from inputs array
for (i=0; i<inputs.length; i++){ 
    const addData = document.createElement("td");
    addData.innerText = inputs[i];
    addRow.appendChild(addData);
}

//append row to table
document.getElementById("body").appendChild(addRow);
}; */
//populateRow()
