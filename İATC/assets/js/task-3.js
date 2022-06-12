const btn = document.getElementById("task-3");
var arr = [];
var sum = 0;
var result = 0;
btn.addEventListener("click", function () {
  let size = Number(prompt("Enter Array size:"));
  console.log(typeof size);
  for (let i = 0; i < size; i++) {
    let element = parseFloat(prompt("Enter Element"));
    sum+=element;
    arr.push(element);
  }
  result = parseFloat(sum/arr.length);
  alert(result)
});
