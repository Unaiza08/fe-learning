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
  
    var expression = document.getElementById('output').value;

    // Extract operator and operands
    var [num1, operator, num2] = extractOperatorAndOperands(expression);

    // Convert operands to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Perform the operation
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    // Update the output field with the result
    document.getElementById('output').value = result;
}

// Function to extract operator and operands from the expression
function extractOperatorAndOperands(expression) {
    var operators = ['+', '-', '*', '/'];
    var operator = '';
    var num1 = '';
    var num2 = '';
    for (var i = 0; i < expression.length; i++) {
        if (operators.includes(expression[i])) {
            operator = expression[i];
            num1 = expression.substring(0, i);
            num2 = expression.substring(i + 1);
            break;
        }
    }
    return [num1, operator, num2];

}