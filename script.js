const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Espaço para a primeira pergunta",
        alternativas: [
            {
                texto: "Alternativa 1 da primeira pergunta",
                afirmacao: "conectado com a prim alternativa da prim pergunta. ",
            },
            {
                texto: "Alternativa 2 da primeira pergunta",
                afirmacao: "conectado com a alternativa 2 da pergunta 1.",
            }


        ]
    },
    {
        enunciado: "Espaço para a segunda Pergunta ",
        alternativas: [
            {
                texto: "Alternativa 1 da segunda pergunta",
                afirmacao: "conectado com a alternativa 1 da pergunta 2."
            },
            {
                texto: "Alternativa 2 da segunda pergunta",
                afirmacao: "conectado com a alternativa 2 da pergunta 2."
            }

        ]
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
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