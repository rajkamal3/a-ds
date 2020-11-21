function charCount(str) {
    let counter = {};

    for (let char of str) {
        char = char.toLowerCase();
        counter[char] = ++counter[char] || 1
    }

    console.log(counter);
}

charCount('bbneuxuiiASASASBBD');
