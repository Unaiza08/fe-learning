function Clear()
{
    var inp = document.getElementById('output');
    inp.value = '';
}
function Solve(val)
{
    var v = document.getElementById('output');
    v.value += val;
}
function compute() {
    var num1 = document.getElementById('output').value;
     var num2 = eval(num1);
     document.getElementById('output').value = num2;
     
    /*  [num1, operatorString, num2] = [num1, '+', num2] 
        switch(operatorString) { 
            case '+': return num1 + num2; 
            case '-': return num1 - num2; 
            case '*': return num1 * num2; 
            case '/': return num1 / num2; 
}  */
    
}