function nomeIdade(nome, idade) {
     return `Meu nome é ${nome} e minha idade é ${idade}`;
}
nomeIdade("jose",18);

console.log(nomeIdade(40, "Gabriel"))
console.log(nomeIdade ("Gabriel", 40))


function soma(nomero1, nomero2) {
    return numero1 + nomero2;
}
                                                    
function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(soma(2))

console.log(multiplica(soma(4, 5)))