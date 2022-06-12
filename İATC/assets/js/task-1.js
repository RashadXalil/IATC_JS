const btn = document.getElementById("task-1")
var arr = [];
var sum =0;
btn.addEventListener("click",function(){
   const size = parseFloat(prompt("Enter array size : "))
   console.log(size)
   for (let i = 0; i < size; i++) {  
        let element = parseFloat(prompt("Enter element"))     
        sum+=element;
        arr.push(element)
   }
   alert(sum);
});