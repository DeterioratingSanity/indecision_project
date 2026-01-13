var newRow = document.getElementById("newRow");
newRow.addEventListener("click", addRow);

var table = document.getElementById("decisions")

function addRow() {
  var dest = document.getElementById("items");

  var init = dest.insertRow(-1);

  var item = init.insertCell(0);
  var weight = init.insertCell(1);
  var active = init.insertCell(2);

  item.setAttribute('contentEditable', true);
  weight.setAttribute('contentEditable', true);

  active.classList.add('toggle');

  console.log(table.tBodies[0].rows.length)
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

  var weightSum = 0;
  var weightChoice = 0;

  for (var i = 0; i < table.tBodies[0].rows.length; i++){
    weightSum += parseInt(table.tBodies[0].rows[i].cells[1].innerHTML, 10);
    //console.log(weightSum);
  }

  var pick = Math.floor(Math.random() * weightSum);

  console.log(pick);

  while (pick >= parseInt(table.tBodies[0].rows[weightChoice].cells[1].innerHTML, 10)) {
    pick -= parseInt(table.tBodies[0].rows[weightChoice].cells[1].innerHTML, 10);
    weightChoice++;
  }

  console.log( table.tBodies[0].rows[weightChoice].cells[0].innerHTML)

}
