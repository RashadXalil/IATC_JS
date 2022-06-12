const btn = document.getElementById("task-2");
var arr=[];
btn.addEventListener("click", function () {
  const lower = Number(prompt("Enter Lower Value"));
  const upper = Number(prompt("Enter Upper Value"));
  for (let i = lower; i <= upper; i++) {  
      arr.push(i);  
      var randomValue = arr[Math.floor(arr.length * Math.random())];  
  }
  alert(randomValue)
});
