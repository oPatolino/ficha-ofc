// Função para gerar valores aleatórios com base no dado selecionado
function gerarDado(dado) {
    const max = parseInt(dado.slice(1)); // Remove o "d" e converte o valor para número
    return Math.floor(Math.random() * max) + 1;
}

// Função para atualizar o ataque
function atualizarAtaque(event) {
    const katana = event.target.closest('.katana'); // Seleciona a katana correspondente
    const dado = katana.querySelector('.ataque-dado').value; // Obtém o dado selecionado
    const bonus = parseInt(katana.querySelector('.ataque-bonus').value); // Obtém o bônus
    const resultado = gerarDado(dado) + bonus; // Calcula o resultado

    // Exibe o resultado
    katana.querySelector('.resultado-ataque').textContent = `Resultado: ${resultado}`;
}

// Função para salvar automaticamente os dados no LocalStorage
function salvarDados() {
    const katanas = document.querySelectorAll('.katana');
    const dados = [];

    katanas.forEach(katana => {
        const nome = katana.querySelector('.katana-name').value;
        const raridade = katana.querySelector('.katana-raridade').value;
        const minerio = katana.querySelector('.katana-minerio').value;
        const ataqueDado = katana.querySelector('.ataque-dado').value;
        const ataqueBonus = katana.querySelector('.ataque-bonus').value;
        const durabilidadeMax = katana.querySelector('.durabilidade-max').value;
        const durabilidadeAtual = katana.querySelector('.durabilidade-atual').value;

        dados.push({
            nome,
            raridade,
            minerio,
            ataqueDado,
            ataqueBonus,
            durabilidadeMax,
            durabilidadeAtual
        });
    });

    localStorage.setItem('katanas', JSON.stringify(dados));
}

// Função para carregar os dados do LocalStorage
function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('katanas'));
    if (dados) {
        const katanas = document.querySelectorAll('.katana');

        dados.forEach((katanaData, index) => {
            const katana = katanas[index];
            if (katana) {
                katana.querySelector('.katana-name').value = katanaData.nome;
                katana.querySelector('.katana-raridade').value = katanaData.raridade;
                katana.querySelector('.katana-minerio').value = katanaData.minerio;
                katana.querySelector('.ataque-dado').value = katanaData.ataqueDado;
                katana.querySelector('.ataque-bonus').value = katanaData.ataqueBonus;
                katana.querySelector('.durabilidade-max').value = katanaData.durabilidadeMax;
                katana.querySelector('.durabilidade-atual').value = katanaData.durabilidadeAtual;
            }
        });
    }
}

// Event listeners para os botões de gerar ataque
document.querySelectorAll('.gerar-ataque').forEach(button => {
    button.addEventListener('click', atualizarAtaque);
});

// Salvar automaticamente os dados ao alterar qualquer campo
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', salvarDados);
});

// Carregar os dados ao carregar a página
window.addEventListener('load', carregarDados);

