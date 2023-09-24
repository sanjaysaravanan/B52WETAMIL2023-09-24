// reverse a string
// INP: Sanjay

// OUT: yajnaS

const str = 'Sanjay';

let i = str.length - 1;

let result = '';

while (i >= 0) {
  result = result + str[i];
  i--;
}

console.log(result);

// Reversal of an array

// INP: 1,2,3,4,5,6,7,8

// OUT: 8,7,6,5,4,3,2,1


const userInput = ['1,2,3,4,5,6,7,8']

const arr = userInput[0].split(',');

// using reverse
// arr.reverse();

// console.log(arr);

// console.log(arr.join());

let i = arr.length - 1;

let result = '';

while (i >= 0) {

  if (i === 0) {
    result = result + arr[i];
  } else {
    result = result + arr[i] + ',';
  }

  i--;
}

console.log(result);


// Iteration of digits

// number as string
// INP: 7899

// OUT:
// 7
// 8
// 9
// 9

const userInput = ['7899'];

var str = userInput[0];

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}


// Number as number


// 1st Iteration
// 7899 % 10 ---> 9
// 7899 / 10 ---> Math.floor(789.9) --> 789

// 2nd Iteration
// 789 % 10 ---> 9
// 789 / 10 ---> Math.floor(78.9) --> 78

// 3rd Iteration
// 78 % 10 ---> 8
// 78 / 10 ---> Math.floor(7.8) --> 7

// 4th Iteration
// 7 % 10 ---> 7
// 7 / 10 ---> Math.floor(0.7) --> 0

// num === 0 stop iteration

let num = 7899;

let result = '';

while (num > 0) {
  let r = num % 10;
  result = r + '\n' + result;
  num = Math.floor(num / 10);
}

console.log(result);

// 1
// \n9
// \n9\n9
// \n8\n9\n9
// \n7\n8\n9\n9


// Sum of Digits
let num = 7899;

let result = 0;

while (num > 0) {
  let r = num % 10;
  result = r + result;
  num = Math.floor(num / 10);
}

console.log(result);


// Recursion ( Function calling itself ) --> 7899
function sumOfDigits(num) {


  if (num === 0) {
    return 0;
  }

  let r = num % 10;

  return r + sumOfDigits(Math.floor(num / 10));

  // 9 + sumOfDigits(789) -> 9 + sumOfDigits(78) -> 8 + sumOfDigits(7) -> 7 + sumOfDigits(0)
}


// Write a code to get a integer n as input and calculate the smallest perfect power of 2 greater than n.

const n = Number(userInput[0]);

let power = 0;
let i = 0;
while (power <= n) {

  power = 2 ** i;

  i++;
}

console.log(power);

// Initial Values
// power = 0, i = 0, n = 17

// 1st Iterration, i = 0
// power = 2 ** i --> 2 ** 0 -> 1, next iteration - true

// 2nd Iteration, i = 1
// power = 2 ** i --> 2 ** 1 -> 2, next iteration - true

// 3rd Iteration, i = 2
// power = 2 ** i --> 2 ** 2 -> 4, next iteration - true

// 4th Iteration, i = 3
// power = 2 ** i --> 2 ** 3 -> 8, next iteration - true

// 5th Iteration, i = 4
// power = 2 ** i --> 2 ** 4 -> 16, next iteration - true

// 6th Iteration, i = 5
// power = 2 ** i --> 2 ** 5 -> 32, next iteration - false

// power = 32


// Additon without Carry
const line1 = userInput[0];

const arrStr = line1.split(' ');


let num1 = Number(arrStr[0]);
let num2 = Number(arrStr[1]);

let result = '';

while (num1 > 0 || num2 > 0) {


  let digit1 = num1 % 10;

  let digit2 = num2 % 10;


  result = ((digit1 + digit2) % 10) + result;

  num1 = Math.floor(num1 / 10);
  num2 = Math.floor(num2 / 10);
}

console.log(result);

// 1st Iteration, num1 = 17, num2 = 56, result = '';
// digit1 = 7, digit2 = 6 result -> (13 % 10) + result -> 3, next iteration true

// 2nd Iteration, num1 = 1, num2 = 5, result = 3
// digit1 = 1, digit2 = 5, result -> (6 % 10)(6) + result('3') -> 63, next iteration false

// 



// factorial using simple loop

let n = 6;

// OUT: 720

let result = 1;
for (var i = 1; i <= n; i++) {
  result = result * i;
}

console.log(result);

// using recursion
function factorial(n) {

  // termination condition
  if (n === 1 || n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// 7 * factorial(6) -> 6 * factorial(5) -> 5 * factorial(4) ... 1 * factorial(0)


factorial(7);

// Check Palindrome

// INP: MADAM, RACECAR
// OUT: true

// INP: AMERICA
// OUT: false

const str = 'MADAM';

// i = 4, j = 0

// str[i] === str[j] --> true, next iteration true
// str[i] === str[j] --> false, console.log(false);

let flag = true;

for (let j = 0, i = str.length - 1; i >= 0 && j < str.length; j++) {

  if (str[i] !== str[j]) {
    flag = false;
    break;
  }
  i--;
}

console.log(flag);











