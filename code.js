let fullStack = {
  languages: ["JavaScript", "React", "HTML"],
  jira: true,
  gitHub: true,
  difficulty: 8,
};
for (i of fullStack.languages) {
  console.log(i);
}
console.log(fullStack.languages);

//__________________________________

console.log(Object.keys(fullStack));

Object.keys(fullStack).forEach((key) => console.log(key));

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
