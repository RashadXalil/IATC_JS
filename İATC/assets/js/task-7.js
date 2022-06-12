const btn = document.getElementById("task-7");
var arr = [];
btn.addEventListener("click", function () {
  let counter = 0;
  const size = Number(prompt("Enter Array Size"));
  for (let i = 0; i < size; i++) {
    let element = parseFloat(prompt("Enter Element : "));
    arr.push(element);
  }
  const target = Number(prompt("Enter Search value:"));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) counter++;
  }
  if (counter > 0) alert("true");
  else alert("false");
});
