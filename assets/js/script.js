const nomeAluno = document.querySelector('#nome');
const turmaAluno = document.querySelector('#turma');
const notaUm = document.querySelector('#nota1');
const notaDois = document.querySelector('#nota2');
const notaTres = document.querySelector('#nota3');
const btnAdicionar = document.querySelector('#addaluno');
const btnAvaliar = document.querySelector('#avaliarBtn');
const resultado = document.querySelector('#resultado');

function avaliar() {
    let infoAlunos = [];
    let aluno;

    const adicionarAlunos = (nome, turma, nota1, nota2, nota3) => {
        btnAdicionar.addEventListener('click', e => {
            e.preventDefault();
            aluno = {
                nome: nome.value,
                turma: turma.value,
                notaUm: Number(nota1.value),
                notaDois: Number(nota2.value),
                notaTres: Number(nota3.value)
            }
            infoAlunos.push(aluno);


            const p = document.querySelector('p');
            p.innerHTML = `${nome.value} <strong>Cadastrado</strong>`;

            const addClass = p.classList.add('cadastrado');
            const popUp = setInterval(addClass, 1000);
            setTimeout(() => {
                clearInterval(popUp);
                p.innerHTML = '';
                p.classList.remove('cadastrado');
            }, 3000)


            console.log(infoAlunos);
            limparForm();
        });

        const limparForm = () => {
            nome.value = '';
            turma.value = '';
            nota1.value = '';
            nota2.value = '';
            nota3.value = '';
        }
    }
    adicionarAlunos(nomeAluno, turmaAluno, notaUm, notaDois, notaTres);

    const avaliacaoAlunos = () => {
        const calculoMedia = (infoAlunos) => {
            infoAlunos.forEach(aluno => {
                const media = (aluno.notaUm + aluno.notaDois + aluno.notaTres) / 3;

                const textoResultado = document.createElement('p');
                textoResultado.setAttribute('class', 'paragrafo');
                textoResultado.innerHTML += `${aluno.nome} (${aluno.turma}) teve média ${media.toFixed(1)} `;
                resultado.appendChild(textoResultado);

                if (media >= 7) {
                    textoResultado.innerText += ` - APROVADO`;
                    textoResultado.setAttribute('class', 'aprovado');
                }
                else {
                    textoResultado.innerText += ` - REPROVADO`;
                    textoResultado.setAttribute('class', 'reprovado');
                }
            })
        };

        btnAvaliar.addEventListener('click', () => {
            calculoMedia(infoAlunos);
        });
    }
    avaliacaoAlunos();
}

avaliar();