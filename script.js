// Variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const openCookie = document.querySelector(".screen1 img")
const tryAgainButton = document.querySelector(".screen2 button")

let randomNumber = Math.round(Math.random() * 111)
let phrases = [
    "Grandes líderes inspiram grandeza nos outros.",
    "Acreditar não é uma escolha, mas sim uma convicção.",
    "Fácil é o caminho da sabedoria, para aqueles não cegos por si mesmos.",
    "Um plano é tão bom quanto os que o realizam.",
    "A melhor confiança é construída pela experiência.",
    "Confie nos seus amigos, e eles terão razão pra confiar em você.",
    "Apoie seus amigos, mantendo o coração mais brando do que a cabeça.",
    "Heróis são feitos pelas circunstâncias.",
    "Ignore seus instintos à seu próprio risco.",
    "O mais poderoso é aquele que controla seu próprio poder.",
    "O sinuoso caminho para a paz é sempre o mais digno, apesar das muitas voltas que ele dá.",
    "Falhar com honra é melhor do que ter sucesso trapaceando.",
    "A cobiça e o medo da perda são as raízes que levam até a árvore do mal.",
    "Quando cercado pela guerra, escolha um lado.",
    "A arrogância diminui a sabedoria.",
    "A verdade ilumina a mente, mas nem sempre traz felicidade ao seu coração.",
    "O medo é uma doença, a esperança é a única cura.",
    "Uma única chance é uma galáxia de esperança.",
    "Dura é a estrada que leva até a grandeza.",
    "Os custos da guerra nunca podem ser realmente calculados.",
    "O compromisso é uma virtude a ser cultivada, não uma fraqueza para ser desprezada.",
    "Um segredo compartilhado é a confiança formada.",
    "A paciência é o primeiro passo para se corrigir um erro.",
    "Um coração sincero nunca deve ser posto em dúvida.",
    "Acredite em si mesmo ou ninguém mais acreditará.",
    "Nenhum presente é mais precioso do que a confiança.",
    "Apego não é compaixão.",
    "Para tudo que se ganha, alguma coisa é perdida.",
    "Fácil nem sempre significa simples.",
    "Ao se ignorar o passado, coloca-se em risco o futuro.",
    "Não tema pelo futuro, não chore pelo passado.",
    "Na guerra, a verdade é a primeira vítima.",
    "Buscar a verdade é fácil, aceitá-la que é difícil.",
    "Um líder sábio reconhece quando deve ser liderado.",
    "Coragem forja heróis, mas confiança constrói amizades.",
    "Escolha o que é certo, e não o que é fácil.",
    "A besta mais perigosa se encontra em nosso interior.",
    "Quem meu pai foi importa menos que a minha memória dele.",
    "A adversidade é o real teste da amizade.",
    "Irmãos de armas são irmãos para a vida toda.",
    "Onde existir força de vontade, existe um meio.",
    "Uma criança roubada é uma esperança perdida.",
    "O desafio da esperança é superar a corrupção.",
    "Aqueles que aplicam a lei devem seguir a lei.",
    "O futuro tem muitos caminhos, escolha bem.",
    "Uma falha no planejamento é um plano para o fracasso.",
    "O amor se apresenta em todas formas e tamanhos.",
    "O medo é um grande motivador.",
    "A verdade pode derrotar o espectro do medo.",
    "O caminho mais rápido para destruição é a vingança.",
    "Não se nasce com a maldade, ela é ensinada.",
    "O caminho para o mal pode trazer grande poder, mas não lealdade.",
    "Equilíbrio é encontrado naquele que enfrenta sua culpa.",
    "Aquele que desiste da esperança desiste da vida.",
    "Quem busca controlar o destino, nunca encontrará a paz.",
    "A adaptação é a chave da sobrevivência.",
    "Se algo tiver que dar errado, dará.",
    "Sem honra, a vitória é vazia.",
    "Sem humildade, a coragem é um jogo perigoso.",
    "Um bom aluno é aquilo que o professor espera que seja.",
    "Quando o destino chama, os escolhidos precisam atender.",
    "Coroas são herdadas, reinos são conquistados.",
    "A aparência nem sempre diz quem realmente a pessoa é.",
    "Compreender é honrar a verdade sob a superfície.",
    "Quem é mais tolo, o tolo ou quem o segue?",
    "Primeiro passo até a lealdade é a confiança.",
    "O caminho para ignorância é guiado pelo medo.",
    "O homem sábio lidera, o homem forte segue.",
    "Nossas ações definem o nosso legado.",
    "Nosso objetivo sempre reflete o caminho percorrido.",
    "Aquele que escraviza, inevitavelmente se torna escravo.",
    "Grandes esperanças podem surgir de pequenos sacrifícios.",
    "A amizade revela quem realmente somos.",
    "Toda guerra é baseada na mentira.",
    "Mantenha seus amigos por perto e seus inimigos mais perto ainda.",
    "Os fortes sobrevivem, os nobres superam.",
    "A confiança é o maior dos presentes, mas deve ser conquistada.",
    "É preciso esquecer o passado para se chegar ao futuro.",
    "Quem somos, nunca muda, quem pensamos que somos, sim.",
    "Um inimigo caído pode se levantar de novo, mas só aquele reconciliado é vencido de verdade.",
    "O inimigo do meu inimigo é meu amigo.",
    "A força de vontade pode derrotar a força bruta.",
    "O medo é uma arma maleável.",
    "Procurar por algo é acreditar em sua existencia.",
    "Lutas geralmente começam e terminam com a verdade.",
    "A desobediência é um pedido por mudança.",
    "Aquele que enfrenta a sei mesmo, descobre a si mesmo.",
    "Os jovens são frequentemente subestimados.",
    "Quando resgatamos os outros, resgatamos a nós mesmos.",
    "Escolha seus inimigos com sabedoria, como se fossem a sua última esperança.",
    "A humanidade é a única defesa contra a humilhação.",
    "Quando tudo parece perdido um verdadeiro héroi traz a esperança.",
    "A arma mais perigosa de um soldado é a coragem.",
    "É preciso confiar em outros ou o sucesso é impossível.",
    "Umas visão pode ter muitas interpretaçoes.",
    "As alianças podem esconder as verdadeiras intenções.",
    "A moralidade seprada os hérois dos vilões.",
    "Às vezes, a menor das dúvidas pode abalar a maior das crenças.",
    "A coragem tem início na autoconfiança.",
    "Nunca fique tão desesperado a ponto de confiar no desonesto.",
    "Nunca desista da esperança, não importa o quão ruim tudo pareça.",
    "A verdade sobre si mesmo é sempre a pior de se aceitar.",
    "O sábio benefício de uma segunda opinião.",
    "Quando tiver dúvidas, vá direto à fonte.",
    "A crença popular nem sempre está correta.",
    "Amar é confiar. confiar é acreditar.",
    "O ciúme é o caminho para o caos.",
    "O engodo é a arma da cobiça.",
    "Sem a escuridão não pode haver luz.",
    "Sabedoria está tanto nos tolos quanto nos sábios.",
    "O que se é perdido geralmente se é achado.",
]

// Eventos
openCookie.addEventListener("click", fortuneCookie)
tryAgainButton.addEventListener("click", tryAgain)
document.addEventListener("keydown", startWithEnter)

// Funções
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
} 

function fortuneCookie() {
    toggleScreen()
    screen2.querySelector("p").innerText = `${phrases[randomNumber]}`
}

function tryAgain() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 14)
}

function startWithEnter(e) {
    if(e.key == "Enter" && screen2.classList.contains("hide")) {    
        fortuneCookie()
    }
}