// 1)
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

// 2)
function myIndexOf(arr, item) {
    let searchedIndex = -1;
    for (let i = 0; i < arr.length; i += 1) {
      if (item === arr[i]) {
        searchedIndex = i;
      }
    }
    return searchedIndex;
  }

// ex 3)
function mySum(arr) {
    let result = 0;
    for (let item in arr) {
      result += arr[item];
    }
    return result;
  }
//ex4)
function myRemove(arr, item) {
let newArr = [];
for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
    newArr.push(arr[i]);
    }
}
return newArr;
}

// ex5)
function myRemoveWithoutCopy(arr, item) {
for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
    arr.splice(i, 1);
    i -= 1;
    len -= 1;
    }
}

return arr;
}

// ex6)

function myFizzBuzz(num) {
if (typeof num !== 'number') return false;
if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
if (num % 3 === 0) return 'fizz';
if (num % 5 === 0) return 'buzz';
return num;
}

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

function isAbove(num1, num2) {
  return num1 > num2;
}


module.exports = {
    sum,
    myIndexOf,
    mySum,
    myRemove,
    myRemoveWithoutCopy,
    myFizzBuzz,
    obj1,
    obj2,
    obj3,
    isAbove
  }