

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let contador = 0
let pares = 1

while(contador <= 5){
    console.log(numeros[pares]);
    numeros[pares]
    pares = pares + 2
    contador++
}


let idade

do{
   idade = parseInt(prompt("Insira idade!"));
   
} while (idade <=0)
alert("Parabéns!")