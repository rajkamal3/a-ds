// Factorial iterative
function factorialIterative(num) {
    let total = 1;

    for (var i = num; i > 1; i--) {
        total *= i
    }

    return total;
}

factorialIterative(51);



// Factorial recursive
function factorialRecursive(num) {
    if (num === 1) return 1;

    return num * factorialRecursive(num - 1);
}

factorialRecursive(5)
