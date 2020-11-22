/*
Pure recursion tips:
- For arrays, use methods like slice, the spread operator, and concat that makes copies of arrays so you don't mutate them.
- Remember that strings are immutable so you will need to use methods like slice, substr to make copies of strings.
- To make copies of objects, use Object.assign or the spread operator.
*/



// Using helper method
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}


// Pure recursive
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    return newArr;
}



// My solution
function collectOddValues(arr) {
    if (arr.length === 0) {
        return;
    }

    let odds = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odds.push(arr[i]);
        }
    }

    return odds;
}


collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]);
