//scriviamo una funzione che accetti tre valori, un array e due numeri, dove a è più piccolo di b
//questa funzione dovrà poi ritornare un nuovo array con i valori che hanno la posizione compresa tra i due numeri 

//creiamo dei dati

const arrayPieno = ['Mario', 'Luigi', 'Yoshi', 'Toad', 'Peach', 'Wario', 'Waluigi'];
const a = 2;
const b = 4;

//stabiliamo la funzione

const nuovoArray = (array, num1, num2) => arrayPieno.slice(a,b);

console.log(nuovoArray(arrayPieno))