
const numDice = document.getElementById("numDice");
const submitDice = document.getElementById("submitDice");
const diceResult = document.getElementById("diceResult");
const imgResult = document.getElementById("imgResult");

submitDice.addEventListener('click', ()=>{
    let temp = 0;
    random_valuses = []
    img_arr = []
    for(let i =0; i < Number(numDice.value); i++)
    {
        temp = Math.floor(Math.random()*6) + 1;
        console.log(temp);
        random_valuses.push(temp);
        img_arr.push(`<img src="dice${temp}.png"></img>`)
    }
    diceResult.textContent = `dice: ${random_valuses.join(', ')}`;
    imgResult.innerHTML = img_arr.join(' ');

});

