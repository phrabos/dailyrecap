let date = "10/17/20";
let RHR = 42;
let HRV = 45;
let temp = 98.7;
let calIn = 2200;
let calOut = 2100;
let wgt = 132;
let fat = 11.7;
let distance = 10;
let sleepHrs = 8.0;
let BP = "118/72"
/* const inputs = [date, RHR, HRV, temp, calIn, calOut, wgt, fat, distance, sleepHrs, BP] */
//selectors
const resetBtn = document.querySelector(".resetBtn");
const submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector(".form");
const tBody = document.querySelector(".tBody");
const tRow = document.querySelector(".tRow");
const tRowAll = document.querySelectorAll(".tRow");


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
        
        //create table data from inputs array 
        const inputs = [date, RHR, HRV, temp, calIn, calOut, wgt, fat, distance, sleepHrs, BP] 
        const addData = document.createElement("td");
        addData.innerText = date;
        
        addRow.appendChild(addData); 
        
        //append row to table
        tBody.appendChild(addRow);

        };

        populateRow("11/17/20");
 });
 
 tRowAll.forEach(item => {
    item.addEventListener("dblclick", (event) => {
 event.preventDefault();
 alert("row clicked");
})});


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
//populateRow();