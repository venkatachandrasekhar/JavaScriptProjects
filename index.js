//1) Counter Logic (Increases, Decreases and Resets the number)

// const increaseButton = document.getElementById("increaseBtn");
// const resetButton = document.getElementById("resetBtn");
// const decreaseButton = document.getElementById("decreaseBtn");
// const number = document.getElementById("number");
// let count = 0;
// increaseButton.onclick = ()=>{
//     count++;
//     number.innerText = count;
// }
// decreaseButton.onclick = ()=>{
//     count--;
//     number.innerText = count;
// }
// resetButton.onclick = ()=>{
//     count= 0;
//     number.innerText = count;
// }


//2) Temperature Conversion (From & To Celcius and Farienheit)

// const temperature = document.getElementById("temperature");
// const toFarenheit = document.getElementById("toFarenheit");
// const toCelcius = document.getElementById("toCelcius");
// const conversion = document.getElementById("conversion");
// const resultTemp = document.getElementById("resultTemp"); 
// conversion.addEventListener("click" ,  ()=>{
//     if(toFarenheit.checked)
//     {
//         resultTemp.innerText = Number(temperature.value)*9/5 + 32;
//     }
//     else if(toCelcius.checked)
//     {
//         resultTemp.innerText = (Number(temperature.value) - 32)*5/9;
//     }
//     else{
//         resultTemp.innerText  = "Select any method of conversion";
//     }
// });


//3) Dice Roller 
// const numDice = document.getElementById("numDice");
// const submitDice = document.getElementById("submitDice");
// const diceResult = document.getElementById("diceResult");
// const imgResult = document.getElementById("imgResult");
// let temp = 0;
// random_valuses = []
// img_arr = []
// submitDice.addEventListener('click', ()=>{
//     for(let i =0; i < Number(numDice.value); i++)
//     {
//         temp = Math.floor(Math.random()*6) + 1;
//         console.log(temp);
//         random_valuses.push(temp);
//         img_arr.push(`<img src="dice${temp}.png"></img>`)
//     }
//     diceResult.textContent = `dice: ${random_valuses.join(', ')}`;
//     imgResult.innerHTML = img_arr.join(' ');
// });


// Fisher-Yates Algorithm (for shuffling an array)
// arr = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// shuffle(arr);
// console.log(arr);
// function shuffle(arr){
//     for(i= arr.length-1; i>0; i--)
//     {
//         rand = Math.floor(Math.random()*(i+1));
//         [arr[rand], arr[i]] = [arr[i], arr[rand]];
//     }
// }

// function simulateAsyncTask() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Asynchronous task completed");
//         resolve("Result of the asynchronous task");
//       }, 2000);
//     });
// }

// async function executeAsyncTaskWithAsyncAwait() {
// try {
//     console.log("Start of the program");
//     const result = await simulateAsyncTask();
//     console.log("Result:", result);

// } catch (error) {
//     console.error("Error:", error);

// } finally {
//     console.log("End of the program");
// }
// }

// executeAsyncTaskWithAsyncAwait();
    


