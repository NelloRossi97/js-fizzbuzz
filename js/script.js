/*
traccia 
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/


for (let i = 1; i <= 100; i++ ){
    if ((i % 3 === 0) && (i % 5 === 0)){
        const fizzbuzz = document.getElementById('cards-container').innerHTML +=
        `
        <div class="square square-fizzbuzz fw-bold">fizzbuzz</div>
        `;
    } else if (i % 5 === 0){
        const buzz = document.getElementById('cards-container').innerHTML +=
        `
        <div class="square square-buzz fw-bold">buzz</div>
        `;
    } else if (i % 3 === 0){
        const fizz = document.getElementById('cards-container').innerHTML += 
        `
        <div class="square square-fizz fw-bold">fizz</div> 
        `;
    } else {
        const number = document.getElementById('cards-container').innerHTML += 
        `
        <div class="square square-number fw-bold"> ${i}</div>
        `;
    }
}
