const btn = document.getElementById("task-4");
var arr=[];
var pow=0;
let result = 1;
btn.addEventListener("click",function(){
    const size = Number(prompt("Enter Array Size"))
    for (let i = 0; i < size; i++) {
        let element = parseFloat(prompt("Enter Element : "))
        arr.push(element)
    }
       for (let i = 0; i < arr.length; i++)
        result = result * arr[i];

    let gm = Math.pow(result, 1 / arr.length);
    alert(gm)
    return gm;
});