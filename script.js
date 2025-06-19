let moedas = 0;
let mineradores = 0;
let custoMinerador = 10;
let moedasPorSegundo = 0;

// Seleciona os elementos HTML
const moedasDisplay = document.getElementById('moedasDisplay'); // display da quantidade de moedas
const gerarMoedaBtn = document.getElementById('gerarMoedaBtn'); // botao de gerar moedas
const mineradoresDisplay = document.getElementById('mineradoresDisplay'); // display do valor dos mineradores
const comprarMineradorBtn = document.getElementById('comprarMineradorBtn'); // botao de compra de mineradores 

// --- Funções do Jogo --- //

// Função para atualizar a exibição de moedas
function atualizarMoedasDisplay() {
    moedasDisplay.textContent = Math.floor(moedas); // Garante que moedas seja um número inteiro no display
}

// Função principal de clique
gerarMoedaBtn.addEventListener('click', () => {
    moedas += 1;
    atualizarMoedasDisplay();
    atualizarMineradoresDisplay(); // Para desabilitar/habilitar o botão de compra
});

