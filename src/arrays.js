const alunos = ['joao','jose','maria','eduardo','ana','diego','thiago','vanessa','edson'];
const notas = [7 , 8 , 5 , 9 , 6 , 3 , 4 , 5.9 , 10];

const alunosComSuaNota = alunos.map(function(item, index) {
    return {
        aluno:item,
        nota: notas[index]
    }
})

const aprovados = alunosComSuaNota.filter(function(item){
    return item.nota >= 6
})

console.log(aprovados)