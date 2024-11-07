let inputArray = [1, 4, 7, 10, 15, 20, 33, 40];
let TwoArray = [];

for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
        TwoArray.push(inputArray[i]);
    }
}

console.log(TwoArray)