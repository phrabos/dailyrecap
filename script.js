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
const inputs = [date, RHR, HRV + 'mms', temp, calIn, calOut, wgt, fat, distance, sleepHrs, BP]


function populateRow () {
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
};
populateRow();

