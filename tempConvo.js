const temperature = document.getElementById("temperature");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const conversion = document.getElementById("conversion");
const resultTemp = document.getElementById("resultTemp"); 
conversion.addEventListener("click" ,  ()=>{
    if(toFarenheit.checked)
    {
        resultTemp.innerText = `${Number(temperature.value)*9/5 + 32}° F`;
    }
    else if(toCelcius.checked)
    {
        resultTemp.innerText = `${(Number(temperature.value) - 32)*5/9}°c`;
    }
    else{
        resultTemp.innerText  = "Select any method of conversion";
    }
});