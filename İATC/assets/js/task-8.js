const btn = document.getElementById("task-8");
var arr=[];
var resarr=[];
btn.addEventListener("click",function(){
    const size = Number(prompt("Enter Array Size"))
    for (let i = 0; i < size; i++) {
        let element = prompt("Enter Element : ")
        arr.push(element)
    }
    let unique = [...new Set(arr)];
    alert(unique)
});