const btn = document.getElementById("task-6");
var arr=[];
btn.addEventListener("click",function(){
    const size = Number(prompt("Enter Array Size"))
    for (let i = 0; i < size; i++) {
        let element = prompt("Enter Element : ")
        arr.push(element)
    }
    console.log(arr)
    const result =arr[Math.floor(Math.random()*arr.length)];
    alert(result)
});