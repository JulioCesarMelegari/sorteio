import carregarPessoas from "./function/carregar-pessoas";

const pessoas = carregarPessoas("src/data/dados.csv");

pessoas.forEach((p) => console.log(p.toString()));