const fibonacci = (number) => {
  if (number < 0) {
    return "OOPS";
  } else if (Number(number) === 0) {
    return 0;
  } else if (number === 1 || number === 2) {
    return 1;
  } else {
    let input = Number(number);
    let array = [1, 1];

    for (let i = 2; i < number; i++) {
      let sum = array[array.length - 1] + array[array.length - 2];
      array.push(sum);
    }
    return array[number - 1];
  }
  
};

// Do not edit below this line
module.exports = fibonacci;
