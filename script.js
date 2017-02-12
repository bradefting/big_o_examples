"use strict";

// O(n) Linear Time
// Input linear to input size

//double() can accept an array of any length so the Big-O notation is linear to the length of the inputted array.

function double(arr){
  let doubledArray = [];

  for(let i = 0; i<arr.length; i++){
    doubledArray[i] = arr[i] * 2;
  }
  console.log(doubledArray);
}

double([2, 5]);
double([2, 100, 3, 6]);


// O(1) Constant Time
// runtime bound by set length of for-loop

//although the Big-O for myAge() looks like it should be O(80), Big-O ignores the constant of 80 so myAge() simplified is O(1)

function myAge(){
  for(let i = 0; i < 80; i++){
    console.log('My age is: ' + i);
  }
}

myAge();


// O(n^2) Quadratic Time

//nested for-loops = 2 X linear Time

function largestArr(arr){

  let total = 0;
  let bigArr = [];

  for(let i = 0; i<arr.length; i++){
    let sum = 0;

    for(let k =0; k<arr[i].length; k++){
      sum += arr[i][k];

      if(sum>=total){
        total = sum;
        bigArr = arr[i];
      }
    }
  }
  console.log(total, 'is the total of the largest array');
  console.log(bigArr, 'is largest array');
}

largestArr([[1,2],[1,1,3]]);
largestArr([[100],[1,20]]);
