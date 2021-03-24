


let numberToCheck = document.querySelector('input').value;
numberToCheck = Number(numberToCheck);
let checkNumber = (numberToCheck % 2) ? "odd" : "even";
console.log(numberToCheck);
console.log(checkNumber);
document.querySelector('#main').textContent = `${numberToCheck}  is ${checkNumber} `;
