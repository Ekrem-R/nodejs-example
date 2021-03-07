// Calculate isimli dosyayi require ile cagirdik. Daha sonra dosyanin alt fonsiyonlarini variable yardimiyla 
// ekrana yazdirdik.

const calculateNumbers=require("./calculate");
console.log("Sum of two numbers that are given: "+calculateNumbers.add(3,5));
console.log("Multiplication of two numbers that are given: "+calculateNumbers.product(6,8));
console.log("Subtraction of two numbers that are given: "+calculateNumbers.subtract(35,15));
console.log("Division of two numbers that are given: "+calculateNumbers.divide(69,3));