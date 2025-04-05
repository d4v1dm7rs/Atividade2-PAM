namespace escola {

    const cadastroAluno = document.getElementById("cadastroAluno") as HTMLButtonElement;
    const nome = document.getElementById("nome") as HTMLInputElement;
    const anoNasc = document.getElementById("anoNasc") as HTMLInputElement;
    const cpf = document.getElementById("cpf") as HTMLInputElement;
    const endereco = document.getElementById("endereco") as HTMLInputElement;
    const telefone = document.getElementById("telefone") as HTMLInputElement;

    let p:  Aluno;

    cadastroAluno.addEventListener("click", ()=>{
        
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
    })
}