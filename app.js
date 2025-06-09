let listaDeNumerosSorteados = [];
let limiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 0;
exibirMensagemInicial();


function exibirMensagemInicial() {
    textoNaTela('h1', 'Jogo do número secreto.');
textoNaTela('p', `Escolha um número de 1 a ${limiteDeNumeros}.`);
}

function textoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML= texto;
    // if ('speechSynthesis' in window) {
    //     let utterance = new SpeechSynthesisUtterance(texto);
    //     utterance.lang = 'pt-BR'; 
    //     utterance.rate = 1.1; 
    //     window.speechSynthesis.speak(utterance); 
    // } else {
    //     console.log("Web Speech API não suportada neste navegador.");
    // }

    // leitor de texto mas é lowkey ruim:/
}


function verificarChute() {
    let chute = document.querySelector ('input').value;
    console.log (numeroSecreto);
    numeroDeTentativas++;

    if (numeroSecreto==chute){
        let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas':'tentativa';
        textoNaTela ('h1','Você acertou!');
        textoNaTela('p',`Você adivinhou o número secreto em ${numeroDeTentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if(chute>numeroSecreto){
        textoNaTela('p','O número secreto é menor.');
    }
    else {
        textoNaTela('p','O número secreto é maior.');
    }
    limparCampo();
    }
};

function gerarNumeroAleatorio () {
       let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1);
       let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
       if (quantidadeDeNumerosNaLista == limiteDeNumeros) {
        listaDeNumerosSorteados = [];
       }

       if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
       }
       else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
       }
    };

function reiniciarOJogo() {
numeroSecreto=gerarNumeroAleatorio();
numeroDeTentativas=0;
limparCampo();
document.getElementById('reiniciar').setAttribute('disabled',true);
exibirMensagemInicial();
}

function limparCampo() {
    chute= document.querySelector('input');
    chute.value='';
} 






