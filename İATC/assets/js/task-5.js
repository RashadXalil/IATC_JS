const btn = document.getElementById("task-5");
btn.addEventListener("click",function(){
    const x1 = Number(prompt("Enter X1"))
    const y1 = Number(prompt("Enter Y1"))
    const x2 = Number(prompt("Enter X2"))
    const y2 = Number(prompt("Enter Y2"))
    const dx = Math.pow(x2 - x1, 2);
    const dy = Math.pow(y2 - y1, 2);
    const result = Math.sqrt(dx + dy)
    alert(result)
});