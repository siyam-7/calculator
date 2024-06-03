add = function(a,b){
    return a+b;
}

subtract = function(a,b){
    return a-b;
}

multiply = function(a,b){
    return a*b;
}

divide = function(a,b){
    return a/b;
}

let num1,num2,operator;

operate = function(operator,num1,num2){
    if(operator==add){
       return add(num1,num2);
    }
    else if(operator==subtract){
        return subtract(num1,num2);
    }
    else if(operator==multiply){
        return multiply(num1,num2);
    }
    else if(operator==divide){
        return divide(num1,num2);
    }
}

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const equal =document.getElementById("equal");
const clear = document.getElementById("clear");
const addition = document.getElementById("add");
const subtratction = document.getElementById("subtract");
const mutliplication = document.getElementById("multiply");
const division = document.getElementById("divide");


one.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "1";
});

two.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "2";
});
three.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "3";
});
four.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "4";
});
five.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "5";
});
six.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "6";
});
seven.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "7";
});
eight.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "8";
});
nine.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "9";
});
zero.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "0";
});
addition.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "+";
});
subtratction.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "-";
});
mutliplication.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "×";
});
division.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "/";
});
clear.addEventListener("click", function(){
    document.getElementById("display").innerHTML = "";
});