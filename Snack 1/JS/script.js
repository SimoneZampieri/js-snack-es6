// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    {
        marca: 'bottecchia',
        peso: 7.2
    },
    {
        marca: 'bianchi',
        peso: 7.1
    },
    {
        marca: 'esperia',
        peso: 7.3
    },
    {
        marca: 'cipollini',
        peso: 7
    },
    {
        marca: 'colnago',
        peso: 7.4
    },
]


//calcolo il peso di tutte le biciclette

let pesoTotale = 0; 

for (let i = 0; i < bici.length; i++) {
  const bicicletta = bici[i];
  const peso = bicicletta.peso;

  pesoTotale += peso;
}

console.log(pesoTotale)


//da qui possiamo trovare la bici dal peso minore

let biciLeggera = bici[0];

for (let i = 0; i < bici.length; i++) {
    const bicicletta = bici[i];
    if (bicicletta.peso < biciLeggera.peso) {
      biciLeggera = bicicletta;
    }
  }

console.log(biciLeggera)

//la bici più leggera è la numero 4, di marca ''cipollini'', perciò stampiamolo a schermo

document.getElementById('bicileggera').innerHTML = `La bicicletta più leggera è della marca ${biciLeggera.name}`