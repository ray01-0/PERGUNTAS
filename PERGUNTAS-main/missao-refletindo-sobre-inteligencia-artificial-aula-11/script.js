const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A Origem dos Sorrisos de Cães",
        alternativas: [
            {
                texto: "Os cães estão controlando nós, humanos, e o sorriso deles é parte dessa manipulação.",
                afirmacao: "Os cães são espertos, né? Eles sabem exatamente como fazer a gente se sentir especial. E se o sorriso deles fosse uma forma de manipulação psicológica? Eles sabem que não podemos resistir à fofura deles, e usam isso para nos controlar. O sorriso seria um truque para manter a gente em linha e garantir que sempre teremos uma boa dose de carinho (e petiscos). Afinal, quem pode resistir a aquele olhar e sorriso carinhoso?"
            },
            {
                texto: "Ou você acha que eles simplesmente sabem como nos fazer sentir especiais sem segundas intenções?",
                afirmacao: "Não, acho que os cães não manipulam intencionalmente. Eles simplesmente sabem como conquistar nossos corações com sua fofura, sem pensar em segundas intenções.."
            }
        ]
    },
    {
        enunciado: "Mudanças Climáticas e Sustentabilidade",
        alternativas: [
            {
                texto: "Você acredita que a ação dos governos é suficiente para combater as mudanças climáticas?",
                afirmacao: "Não, acho que os governos precisam agir com mais urgência. As políticas públicas não são suficientes para lidar com os impactos crescentes das mudanças climáticas."
            },
            {
                texto: "O que você acha sobre a utilização de fontes de energia renováveis, como solar e eólica, em substituição aos combustíveis fósseis?",
                afirmacao: "Acho essencial. As fontes renováveis são a chave para reduzir as emissões de carbono e garantir um futuro sustentável."
            }
        ]
    },
    {
        enunciado: "Educação e Tecnologia no Futuro",
        alternativas: [
            {
                texto: " Você acredita que a tecnologia pode substituir os professores na educação tradicional?.",
                afirmacao: "Sim, as tecnologias educacionais podem fornecer um aprendizado personalizado e dinâmico, o que poderia substituir a educação tradicional em alguns contextos."
            },
            {
                texto: "Como você se sente em relação ao uso de inteligência artificial para avaliar o desempenho dos alunos em vez de métodos tradicionais de avaliação?",
                afirmacao: "Não sou a favor, pois uma IA pode não entender o contexto e as circunstâncias de cada aluno, além de não conseguir avaliar habilidades socioemocionais."
            }
        ]
    },
    {
        
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
