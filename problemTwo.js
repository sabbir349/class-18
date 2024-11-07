for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
for (let i = 78; i <= 98; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
let sumOdd = 0;
for (let i = 81; i <= 131; i++) {
    if (i % 2 !== 0) {
        sumOdd += i;
    }
}
console.log("Sum of all odd numbers from 81 to 131 is:", sumOdd)

let sumEven = 0;
for (let i = 206; i <= 311; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("Sum of all even numbers from 206 to 311 is:", sumEven)
