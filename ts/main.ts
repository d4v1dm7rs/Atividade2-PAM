namespace escola {

    const cadastroAluno = document.getElementById(cadastroAluno) as HTMLButtonElement;
    const nome = document.getElementById(nome) as HTMLInputElement;
    const anoNasc = document.getElementById(anoNasc) as HTMLInputElement;
    const cpf = document.getElementById(cpf) as HTMLInputElement;
    const endereco = document.getElementById(endereco) as HTMLInputElement;
    const telefone = document.getElementById(telefone) as HTMLInputElement;

    cadastroAluno.addEventListener("click", ()=>{
        let p = new Pessoa();
        p.nome = nome.value;
        p.anoNasc = parseInt(anoNasc.value);
        p.cpf = parseInt(cpf.value);
        p.endereco = endereco.value;
        p.telefone = parseInt(telefone.value);

        document.getElementById().textContent = p.nome;
        document.getElementById().textContent = p.anoNasc.toFixed();
        document.getElementById().textContent = p.cpf.toString();
        document.getElementById()
    })
}