// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


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
    Math.floor(Math.random()*(max - min + 1)) + min;
}


//ora possiamo inserire questi valori all'interno degli oggetti, avvalendoci dell'uso di .forEach

squadre.forEach(Object => {

    Object.falli = numeroRandom(1,10);
    Object.punti = numeroRandom(1,20);
    
});


console.log(squadre)