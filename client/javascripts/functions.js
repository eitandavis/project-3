//jshint esversion: 7

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

//Req. 4B
let bitBatBotOrNot = (n) => {
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  else if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result = `${result}Not`;
}
  return result;
};

//Req. 4C
let findAllbitBatBotOrNots1 = (arr) => {
  let newArr = arr.map(n => n.toString() + ": " + bitBatBotOrNot(n));
   return newArr;
};

//Req. 4D
let findAllbitBatBotOrNots2 = (arr) => {
   let newArr2 = [];
   for (var i = 0; i < arr.length; i++) {
    let count = newArr2.push(`${arr[i]}: ${bitBatBotOrNot(arr[i])}`);
  }
  return newArr2;
};

//Req. 4E
let findAllbitBatBotOrNots3 = (arr) => {
   let newArr3 = [];
   for (var num of arr) {
     let update = newArr3.push(`${num}: ${bitBatBotOrNot(num)}`);
   }
   return newArr3;
};

//Req. 4F
let findAllbitBatBotOrNots4 = (arr) => {
  let newArr4 = [];
  arr.forEach((num) => {
    let update = newArr4.push(`${num}: ${bitBatBotOrNot(num)}`);
  });
  return newArr4;
};

//Step 5 XC
let findAllbitBatBotOrNotXC = (arr) => {
  let newArr5 = [];
  for (var num in arr){
    let update = newArr5.push(`${num}: ${bitBatBotOrNot(n)}`);
  }
  return newArr5;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
