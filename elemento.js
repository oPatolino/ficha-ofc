// Aguardar o carregamento completo da página
document.addEventListener("DOMContentLoaded", function() {
    // Selecionando os campos de nível de cada elemento
    const nivelElementos = {
        agua: document.getElementById('nivel_agua'),
        fogo: document.getElementById('nivel_fogo'),
        ar: document.getElementById('nivel_ar'),
        terra: document.getElementById('nivel_terra'),
        planta: document.getElementById('nivel_planta'),
        veneno: document.getElementById('nivel_veneno'),
        trovao: document.getElementById('nivel_trovao'),
        gelo: document.getElementById('nivel_gelo'),
        pedra: document.getElementById('nivel_pedra')
    };

    // Função para carregar os valores salvos do LocalStorage
    function carregarValores() {
        for (let elemento in nivelElementos) {
            const valorSalvo = localStorage.getItem(elemento);
            if (valorSalvo !== null) {
                nivelElementos[elemento].value = valorSalvo;
            }
        }
    }

    // Função para salvar os valores no LocalStorage
    function salvarValores() {
        for (let elemento in nivelElementos) {
            const nivel = nivelElementos[elemento].value;
            localStorage.setItem(elemento, nivel);
        }
    }

    // Carregar os valores salvos assim que a página for carregada
    carregarValores();

    // Adicionar evento de input em cada campo de nível para salvar automaticamente
    for (let elemento in nivelElementos) {
        nivelElementos[elemento].addEventListener('input', salvarValores);
    }
});

