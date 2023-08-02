console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `Sâo Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprado = false;
const destino = "Salvador";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;
while(contador<3){
    console.log(listaDeDestinos[contador]);
    contador += 1;
}

