//creiamo un array di oggetti che comprenda delle squadre di calcio, i punti fatti e i falli subiti
let squadre = [
    {
        nome: 'juve',
        punti: 0,
        falli: 0
    },
    {
        nome: 'milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'napoli',
        punti: 0,
        falli: 0
    },
    {
        nome: 'venezia',
        punti: 0,
        falli: 0
    },
]


//punti e falli verranno riempiti con valori randomici, e perciò di default sono settati a 0 
//diamo loro dei valori creando una funzione

function numeroRandom (min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}


//ora possiamo inserire questi valori all'interno degli oggetti, avvalendoci dell'uso di .forEach

squadre.forEach(squadra => {

    squadra.falli = numeroRandom(1,10);
    squadra.punti = numeroRandom(1,90);
    
});

console.log(squadre)

//ora che falli e punti hanno dei valori, dobbiamo creare un nuovo array che contenga solo loro e va stampato in console 

for ( let i = 0; i < squadre.lenght)