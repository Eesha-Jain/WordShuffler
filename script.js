var form = document.getElementById("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
});

var num = 1;

function addOption() {
  num++;

  var input = document.createElement("input");
  input.name = "input" + num;
  input.type = "text";
  input.id = "input" + num;
  input.className = "input";

  var label = document.createElement("label");
  label.htmlFor = "input" + num;
  label.innerText = "Word " + num + ": ";

  var div = document.createElement("div");
  div.appendChild(label);
  div.appendChild(input);

  document.getElementById("inputs").appendChild(div);
}