const getThreeValue = function (a, b, c) {
  if (arguments[1] === undefined) {
    return a;
  } else if (arguments[2] === undefined) {
    return a + b;
  }
  return a + b + c;
};
console.log(getThreeValue(1,0,'dsds'));



const alphabetWords = (...words) => words.sort().join(" ");
console.log(alphabetWords("cccc", "raaaa", "bbbbb", "aaaaa"));



const regardsUser = (user) => {
  if (user == undefined) {
    let valueNameOfUser = prompt("Enter your name");
    return "Regards, " + valueNameOfUser;
  } else {
    return "Regards, " + user;
  }
};
console.log(regardsUser("sss"));



const exponentiationNumber = (firstNumber, secondNumber) => {
  if (secondNumber == undefined) {
    return firstNumber ** 2;
  } else {
    return firstNumber ** secondNumber;
  }
};
console.log(exponentiationNumber(3));
