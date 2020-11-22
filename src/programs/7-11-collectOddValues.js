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

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]);

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
