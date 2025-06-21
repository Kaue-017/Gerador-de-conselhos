const botaoGerador = document.querySelector('.gerador-botao');
const idConselho = document.querySelector('.numero-conselho');
const conselhoTexto = document.querySelector('.conselho');

botaoGerador.addEventListener('click', conselhoGerado);

async function gerarConselho() {
    try {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    if(!resposta.ok) {
        throw new Error("Erro ao buscar as informações da API");
    }

    return await resposta.json();
    } catch(error) {
        console.log("Erro ao gerar conselho", error);
    }
}

async function conselhoGerado() {
    const conselho = await gerarConselho();
    const advice = conselho.slip.advice;
    const id = conselho.slip.id;
    conselhoTexto.innerText = advice;
    idConselho.innerText = `ADVICE #${id}`;
}

conselhoGerado();