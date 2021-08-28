//((P*(1+i)^n) - P)

let display = document.querySelector("#res");
let button = document.querySelector("button");
let ans;

button.addEventListener("click", () => {
  var p = 0;
  var i = 0;
  var n = 0;
  var CI = 0;

  p = parseInt(document.getElementById("principal").value);
  i = parseInt(document.getElementById("annual-rate").value);
  n = parseInt(document.getElementById("period").value);

  CI = ((p * (1 + i)) ^ n) - p;
  display.innerHTML = CI;
  console.log(CI);
});
