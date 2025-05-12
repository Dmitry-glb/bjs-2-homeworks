function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }  
      if (arr[i] < min) {
        min = arr[i];
      }
      sum += arr[i];
    }
    avg = Number((sum / arr.length).toFixed(2));
    
    return { min: min, max: max, avg: avg };
  } else {
    return 0;
  }
}

function summElementsWorker(...arr) {
  if (arr.length !== 0) {
  let result = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return result;
} else {
  return 0;
}

}

function differenceMaxMinWorker(...arr) {
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  if (arr.length === 0) {
    return 0;
  } else {
    return maxValue - minValue;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
} else {
  return 0;
}
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  if (arr.length !== 0) {
    arr.forEach(element => {
      if (element % 2 === 0) {
        sumEvenElement += element;
        countEvenElement++;
      }
    })
    if (countEvenElement != 0) {
      return sumEvenElement / countEvenElement;
    }
  } else {
    return 0;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  arrOfArr.forEach(element => {
    const currResult = func(...element)
    if (currResult > maxWorkerResult) {
      maxWorkerResult = currResult;
    }
  })
  

  return maxWorkerResult;
}