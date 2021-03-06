// console.clear();

// - Calculating the speed or efficiency of an algorithm
// based on time is unreliable because different machines
// calculate different times.
// - So the best thing to do is to count the number of
// operations the machine performs.

function sum(num) {
  let init = 0;
  for (let i = 1; i <= num; i++) {
    init += i;
  }
  return init;
}

// let t1 = performance.now();
// let ans = sum(1000000000);
// console.log(ans);
// let t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

function addUpto(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
let ans = addUpto(10000000000);
console.log(ans);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
