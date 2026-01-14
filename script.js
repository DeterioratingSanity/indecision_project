var newRow = document.getElementById("newRow");
newRow.addEventListener("click", addRow);

var table = document.getElementById("decisions")

var weightRows = [];

var activeRows = [];

function addRow() {
  var dest = document.getElementById("items");

  var init = dest.insertRow(-1);

  var item = init.insertCell(0);
  var weight = init.insertCell(1);
  var active = init.insertCell(2);

  item.setAttribute('contentEditable', true);

  weight.innerHTML = '1';

  weight.setAttribute('contentEditable', true);

  active.classList.add('toggle');
  //active.classList.add('active');

  weightRows.push(weight);
  weightRows[weightRows.length-1].addEventListener("keydown", numChek);
  
  activeRows.push(active);
  activeRows[activeRows.length-1].addEventListener("click", engage);

  console.log(table.tBodies[0].rows.length)
}

function engage() {
  //event.target.innerHTML = "E";
  event.target.classList.toggle('active');
}

var nummable = new Set(['Digit1']);

function numChek(in) {
  console.log("check num? " + e);
}

// table.tBodies[0].rows.length

var decide = document.getElementById("toggle");
decide.addEventListener("click", weightedPick);

function pickRow() {
  var pick = Math.floor(Math.random() * table.tBodies[0].rows.length);
  console.log("Picked: " + table.tBodies[0].rows[pick].cells[0].innerHTML);

  alert("Picked: " + table.tBodies[0].rows[pick].cells[0].innerHTML);
}

function weightedPick(){

  //console.log(table.tBodies[0].rows[0].cells[2].classList.contains("active"));

  var weightSum = 0;
  var weightChoice = 0;

  for (var i = 0; i < table.tBodies[0].rows.length; i++){
    if (table.tBodies[0].rows[i].cells[2].classList.contains("active")) {
      
      weightSum += parseInt(table.tBodies[0].rows[i].cells[1].innerHTML, 10);
      console.log("Active row added");
    }
  }
  console.log("Weight " + weightSum);

  var pick = Math.floor(Math.random() * weightSum);

  console.log("Pick " + pick);

  while (pick >= parseInt(table.tBodies[0].rows[weightChoice].cells[1].innerHTML, 10) || !table.tBodies[0].rows[weightChoice].cells[2].classList.contains("active")) {
    if (table.tBodies[0].rows[weightChoice].cells[2].classList.contains("active")) {
      pick -= parseInt(table.tBodies[0].rows[weightChoice].cells[1].innerHTML, 10);
      console.log("Active row subtracted ");
    }
    weightChoice++;
  }

  console.log( table.tBodies[0].rows[weightChoice].cells[0].innerHTML)

}
