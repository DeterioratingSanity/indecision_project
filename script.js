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

  active.classList.add('toggle');

  console.log(table.tBodies[0].rows.length)
}

// table.tBodies[0].rows.length

var decide = document.getElementById("toggle");
decide.addEventListener("click", pickRow);

function pickRow() {
  var pick = Math.floor(Math.random() * table.tBodies[0].rows.length);
  console.log("Picked: " + table.tBodies[0].rows[pick].cells[0].innerHTML);

  alert("Picked: " + table.tBodies[0].rows[pick].cells[0].innerHTML);
}
