const getThreeValue = (a = 0, b = 0, c = 0) => {
  return a + b + c;
};
console.log(getThreeValue(1, 2, 'sdsdsdsd'));



const alphabetWords = (...words) => {
  return words.sort().join(' ');
};
console.log(alphabetWords('cccc', 'raaaa', 'bbbbb', 'aaaaa'))



const regardsUser = (user) => {
  if (user == undefined) {
    let valueNameOfUser = prompt('Enter your name')
    return 'Regards, ' + valueNameOfUser
  } else {
    return 'Regards, ' + user
  }
}
console.log(regardsUser('sss'))



const  exponentiationNumber = (firstNumber, secondNumber) => {
  if (secondNumber == undefined) {
    return firstNumber ** 2
  } else {
    return firstNumber ** secondNumber
  }
}
console.log(exponentiationNumber(3))


