"use strict";
var escola;
(function (escola) {
    const cadastroAluno = document.getElementById("cadastroAluno");
    const nome = document.getElementById("nome");
    const anoNasc = document.getElementById("anoNasc");
    const cpf = document.getElementById("cpf");
    const endereco = document.getElementById("endereco");
    const telefone = document.getElementById("telefone");
    let p;
    cadastroAluno.addEventListener("click", () => {
        p.nome = nome.value;
        p.anoNasc = parseInt(anoNasc.value);
        p.cpf = cpf.value;
        p.endereco = endereco.value;
        p.telefone = telefone.value;
        document.getElementById("Nome").textContent = p.nome;
        document.getElementById("anoNasc").textContent = p.anoNasc.toFixed();
        document.getElementById("Cpf").textContent = p.cpf.toString();
        document.getElementById("Endereco").textContent = p.endereco.toString();
        document.getElementById("Telefone").textContent = p.telefone.toString();
    });
})(escola || (escola = {}));
