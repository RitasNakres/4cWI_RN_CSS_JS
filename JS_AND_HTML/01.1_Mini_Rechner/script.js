function clickedOnButton(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let operator = document.getElementById("operator").value
    let result;
    if(operator=="+"){
        result = parseFloat(num1) + parseFloat(num2);
        document.getElementById("result").innerHTML = result;
        console.log(result);
    } else if (operator =="-"){
        result = parseFloat(num1) - parseFloat(num2);
        document.getElementById("result").innerHTML = result;
        console.log(result);
    } else if (operator =="*"){
        result = parseFloat(num1) * parseFloat(num2);
        document.getElementById("result").innerHTML = result;
        console.log(result);
    } else if (operator =="/"){
        result = parseFloat(num1) / parseFloat(num2);
        document.getElementById("result").innerHTML = result;
        console.log(result);
    }
}