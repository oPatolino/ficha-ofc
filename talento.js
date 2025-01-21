document.addEventListener("DOMContentLoaded", () => {
    // Carregar os dados salvos do localStorage
    const talentos = JSON.parse(localStorage.getItem("talentos")) || [];

    // Preencher os campos de talentos com os dados salvos
    const nomeInputs = document.querySelectorAll(".talento-nome");
    const descricaoInputs = document.querySelectorAll(".talento-descricao");

    talentos.forEach((talento, index) => {
        if (nomeInputs[index]) nomeInputs[index].value = talento.nome;
        if (descricaoInputs[index]) descricaoInputs[index].value = talento.descricao;
    });

    // Adicionar evento de salvamento automático
    nomeInputs.forEach((input, index) => {
        input.addEventListener("input", () => salvarTalentos());
    });

    descricaoInputs.forEach((input, index) => {
        input.addEventListener("input", () => salvarTalentos());
    });

    // Função para salvar os talentos no localStorage
    function salvarTalentos() {
        const novosTalentos = [];
        nomeInputs.forEach((input, index) => {
            novosTalentos.push({
                nome: input.value,
                descricao: descricaoInputs[index].value
            });
        });
        localStorage.setItem("talentos", JSON.stringify(novosTalentos));
    }
});

