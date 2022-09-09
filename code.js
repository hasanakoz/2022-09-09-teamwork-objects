let fullStack = {
  languages: ["JavaScript", "React", "HTML"],
  jira: true,
  gitHub: true,
  difficulty: 8,
};
// for (i of fullStack.languages) {
//   console.log(i);
// }
// console.log(fullStack.languages);

// //__________________________________

// console.log(Object.keys(fullStack));

// Object.keys(fullStack).forEach((key) => console.log(key));

//___________________________________________
const myCar = {
  make: "ford",
  model: "Mustang",
  year: 1965,
  color: "Black",
};
//1.yöntem
// myCar.age = (y) => {
//   return y - myCar.year;
// };

// console.log(myCar.age(2022));

//2.yöntem
/* Write your code here   myCar.age = */
// myCar.age = () => {
//   return new Date().getFullYear() - myCar.year;
// };

// console.log(myCar.age());

//________________________________
// - Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// - Example:

// ```
// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII

let romanNumeralConverter = (number) => {
  romanNumeral = [];
  if (String(number)[String(number).length - 1] == 1) {
    romanNumeral.unshift("I");
  } else if (String(number)[String(number).length - 1] == 2) {
    romanNumeral.unshift("II");
  } else if (String(number)[String(number).length - 1] == 3) {
    romanNumeral.unshift("III");
  } else if (String(number)[String(number).length - 1] == 4) {
    romanNumeral.unshift("IV");
  } else if (String(number)[String(number).length - 1] == 5) {
    romanNumeral.unshift("V");
  } else if (String(number)[String(number).length - 1] == 6) {
    romanNumeral.unshift("VI");
  } else if (String(number)[String(number).length - 1] == 7) {
    romanNumeral.unshift("VII");
  } else if (String(number)[String(number).length - 1] == 8) {
    romanNumeral.unshift("VIII");
  } else if (String(number)[String(number).length - 1] == 9) {
    romanNumeral.unshift("IX");
  }

  if (String(number)[String(number).length - 2] == 1) {
    romanNumeral.unshift("X");
  } else if (String(number)[String(number).length - 2] == 2) {
    romanNumeral.unshift("XX");
  } else if (String(number)[String(number).length - 2] == 3) {
    romanNumeral.unshift("XXX");
  } else if (String(number)[String(number).length - 2] == 4) {
    romanNumeral.unshift("XL");
  } else if (String(number)[String(number).length - 2] == 5) {
    romanNumeral.unshift("L");
  } else if (String(number)[String(number).length - 2] == 6) {
    romanNumeral.unshift("LX");
  } else if (String(number)[String(number).length - 2] == 7) {
    romanNumeral.unshift("LXX");
  } else if (String(number)[String(number).length - 2] == 8) {
    romanNumeral.unshift("LXXX");
  } else if (String(number)[String(number).length - 2] == 9) {
    romanNumeral.unshift("XC");
  }

  if (String(number)[String(number).length - 3] == 1) {
    romanNumeral.unshift("C");
  } else if (String(number)[String(number).length - 3] == 2) {
    romanNumeral.unshift("CC");
  } else if (String(number)[String(number).length - 3] == 3) {
    romanNumeral.unshift("CCC");
  } else if (String(number)[String(number).length - 3] == 4) {
    romanNumeral.unshift("CD");
  } else if (String(number)[String(number).length - 3] == 5) {
    romanNumeral.unshift("D");
  } else if (String(number)[String(number).length - 3] == 6) {
    romanNumeral.unshift("DC");
  } else if (String(number)[String(number).length - 3] == 7) {
    romanNumeral.unshift("DCC");
  } else if (String(number)[String(number).length - 3] == 8) {
    romanNumeral.unshift("DCCC");
  } else if (String(number)[String(number).length - 3] == 9) {
    romanNumeral.unshift("CM");
  }

  if (String(number)[String(number).length - 4] == 1) {
    romanNumeral.unshift("M");
  } else if (String(number)[String(number).length - 4] == 2) {
    romanNumeral.unshift("MM");
  }
  console.log(romanNumeral.join(""));
};
romanNumeralConverter();

var numeralCodes = [
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Ones
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
]; // Hundreds

function convert(num) {
  var numeral = "";
  var digits = num.toString().split("").reverse();
  for (var i = 0; i < digits.length; i++) {
    numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
  }
  return numeral;
}
