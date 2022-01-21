var number1 = "";
var number2 = "";
var operator = "";
//to access more than one digit
function concatenumber(singledigit) {
    if (operator == "") {
        number1 = number1 + singledigit;
        display(number1);
    }
    else {
        number2 = number2 + singledigit;
        display(number2);
    }
}
//for accessing operators
function setoperator(newoperator) {
    operator = newoperator;
}
//backspace
function deletelastdigit() {
    if (operator == "") {
        number1 = number1.slice(0, -1);
        display(number1);
    } else {
        number2 = number2.slice(0, -1);
        display(number2);
    }
}
//clear function(clears only one number ex:we entered num1 and set any operator and then num2 we have to enter if we use this function it only clears num2,num1 is stored )
function clearall() {
    if(operator == "") {
        number1 = "";
        display(number1);
    } else {
        number2 = "";
        display(number2);
    }   

}
//if is used to compare between operators
function equals() {
    if (operator == "+") {
        number1 = add(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator == "x")
    {
        number1 = mul(number1, number2);
        number2 = "";
        operator = "";
        display(number1);

    }
    else if(operator=="-") 
    {
        number1=sub(number,number2);
        number2="";
        operator="";
        display(number1);
    }
    else if(operator="÷")
    {
        number1=div(number1,number2);
        number2="";
        operator="";
        display(number1);
    }
    else{
        display(number1);
    }
}
function display(num) {
    var p = document.getElementById('dis');
    p.innerText = num;
}
//add function
function add(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 + num2;
}
//mul function
function mul(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 * num2;
}
//div function
function div(num1,num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1/num2;
}
//sub function
function sub(num1,num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1-num2;
}