
function calcularMedia() {
   
    const nome = document.getElementById("nome").value;
    const disciplina = document.getElementById("disciplina").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

   
    if (!nome || !disciplina || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

  
    const soma = nota1 + nota2 + nota3 + nota4;
    const media = soma / 4;

    
    let status = media >= 7 ? "APROVADO" : "REPROVADO";

   
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Aluno: ${nome}\nDisciplina: ${disciplina}\nMédia: ${media.toFixed(2)}\nStatus: ${status}`;

    
    const listaHistorico = document.getElementById("listaHistorico");
    const itemHistorico = document.createElement("li");
    itemHistorico.textContent = `${nome} - ${disciplina} - Média: ${media.toFixed(2)} (${status})`;
    listaHistorico.appendChild(itemHistorico);
}


function limparFormulario() {
    document.getElementById("resultado").textContent = "";
}
