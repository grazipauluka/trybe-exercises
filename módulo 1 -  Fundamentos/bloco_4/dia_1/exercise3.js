// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. //

let num1 = 2
let num2 = 5
let num3 = 8

if( num1 == num2 || num1 == num3 || num2 == num3){
    console.log("erro");
      } 
else if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num3) {
    console.log(num2)
} else {
    console.log(num3)
}

