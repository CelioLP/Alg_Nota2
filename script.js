// Solicitar ao Aluno que digite a sua nota
let nota = parseFloat (prompt("Digite a sua nota"));
// Verificar se o aluno está aprovado, reprovdo ou recuperação

if (nota >=7){
    alert ("Aluno aprovado!😉");
}else if (nota>= 5){
    alert ("recuperação");
}else {
    alert ("Reprovado");
}
