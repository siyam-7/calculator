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