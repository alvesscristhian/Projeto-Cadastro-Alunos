const nome = document.querySelector('#nome'); // Captura os elementos HTML
const turma = document.querySelector('#turma');
const notaUm = document.querySelector('#nota1');
const notaDois = document.querySelector('#nota2');
const notaTres = document.querySelector('#nota3');
const btnAdicionar = document.querySelector('#addaluno');
const btnAvaliar = document.querySelector('#avaliarBtn');
const resultado = document.querySelector('#resultado');
const mensagem = document.querySelector('p');
const numMedia = document.querySelector('#info-media');
const mediaText = document.querySelector('#texto-media')
let infoAlunos = [];

function avaliar() { // Função Principal
    let aluno;

    btnAdicionar.addEventListener('click', e => { // Captura clique do botão adicionar aluno
        e.preventDefault();
        aluno = { // Armazena os dados do aluno em objeto
            nome: nome.value,
            turma: turma.value,
            notaUm: Number(notaUm.value),
            notaDois: Number(notaDois.value),
            notaTres: Number(notaTres.value)
        }
        infoAlunos.push(aluno); // Armazena o objeto dentro de um array

        mensagem.innerHTML = `${nome.value} <strong>Cadastrado(a)</strong>`;
        mensagem.classList.add('cadastrado'); 

        setTimeout(() => { // Exibe uma mensagem de pop up por 2 segundos
            mensagem.innerHTML = '';
            mensagem.classList.remove('cadastrado');
        }, 2000)


        limparForm(); // Após a confirmação do aluno limpa o forumulário 
        console.log(infoAlunos);
    });

    const limparForm = function () { 
        nome.value = '';
        turma.value = '';
        nota1.value = '';
        nota2.value = '';
        nota3.value = '';
    }
    const mediaGeral = []

    btnAvaliar.addEventListener('click', () => { // Captura clique do botão avaliar
        resultado.innerHTML = '';
        mediaGeral.length = 0;

        infoAlunos.forEach(aluno => { // Percorre o array inteiro, adicionando média do aluno ao array e o coloca em resultados
            media = (aluno.notaUm + aluno.notaDois + aluno.notaTres) / 3;
            mediaGeral.push(media);

            const textoResultado = document.createElement('p');
            textoResultado.classList.add('paragrafo');

            if (media >= Number(numMedia.value)) {
                textoResultado.innerHTML = `${aluno.nome} (${aluno.turma}) teve média ${media.toFixed(1)} - APROVADO`;
                textoResultado.classList.add('aprovado');
            } else {
                textoResultado.innerHTML = `${aluno.nome} (${aluno.turma}) teve média ${media.toFixed(1)} - REPROVADO`;
                textoResultado.classList.add('reprovado');
            }
            resultado.appendChild(textoResultado);
        });
        const mediaTotal = mediaGeral.reduce((total, valor, indice) => { // Captura a média total dos alunos
            return total = (total + valor) / (indice + 1);
        });
        mediaText.innerHTML= `Média da turma: ${mediaTotal.toFixed(1)}`; // Mostra uma mensagem de média geral da turma no site
    });
}
avaliar(); // Executa o programa