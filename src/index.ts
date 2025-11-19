import carregarPessoas from "./function/carregar-pessoas";
import sortearAzarado from "./function/sortear-azarado";

const pessoas = carregarPessoas("src/data/dados.csv");
const azarado = sortearAzarado(pessoas);
console.log(azarado.toString());

//pessoas.forEach((p) => console.log(p.toString()));

