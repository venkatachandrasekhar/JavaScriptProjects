const increaseButton = document.getElementById("increaseBtn");
const resetButton = document.getElementById("resetBtn");
const decreaseButton = document.getElementById("decreaseBtn");
const number = document.getElementById("number");
let count = 0;
increaseButton.onclick = ()=>{
    count++;
    number.innerText = count;
}
decreaseButton.onclick = ()=>{
    count--;
    number.innerText = count;
}
resetButton.onclick = ()=>{
    count= 0;
    number.innerText = count;
}