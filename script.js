document.addEventListener("DOMContentLoaded", () => {
  function calcularDTA() {
    const atributos = ["visao", "audicao", "olfato", "fala", "tato"];
    atributos.forEach((atributo) => {
      const base = parseFloat(document.getElementById(atributo).value) || 0;
      const dta = base * 4;
      document.getElementById(`${atributo}DTA`).value = dta;
    });

    const visao = parseFloat(document.getElementById("visao").value) || 0;
    const audicao = parseFloat(document.getElementById("audicao").value) || 0;
    const olfato = parseFloat(document.getElementById("olfato").value) || 0;
    const fala = parseFloat(document.getElementById("fala").value) || 0;
    const tato = parseFloat(document.getElementById("tato").value) || 0;

    const sg = Math.floor((visao + audicao + olfato + fala + tato) / 5);
    document.getElementById("sg").value = sg;
    document.getElementById("sgDTA").value = sg * 4;
  }

  function calcularRecursos() {
    const forca = parseFloat(document.getElementById("forca").value) || 0;
    const eficienciaFisica = parseFloat(document.getElementById("eficienciaFisica").value) || 0;
    const resistenciaFisica = parseFloat(document.getElementById("resistenciaFisica").value) || 0;
    const intelecto = parseFloat(document.getElementById("intelecto").value) || 0;
    const eficienciaMagica = parseFloat(document.getElementById("eficienciaMagica").value) || 0;
    const resistenciaMagica = parseFloat(document.getElementById("resistenciaMagica").value) || 0;
    const agilidade = parseFloat(document.getElementById("agilidade").value) || 0;
    const velocidade = parseFloat(document.getElementById("velocidade").value) || 0;

    const vidaBonus = parseFloat(document.getElementById("vidaBonus").value) || 0;
    const eterBonus = parseFloat(document.getElementById("eterBonus").value) || 0;
    const estaminaBonus = parseFloat(document.getElementById("estaminaBonus").value) || 0;

    const vidaMaxima = (forca + eficienciaFisica + resistenciaFisica) * 3 + vidaBonus;
    const eterMaximo = (intelecto + eficienciaMagica + resistenciaMagica) * 3 + eterBonus;
    const estaminaMaxima = (agilidade + velocidade) * 3 + estaminaBonus;

    document.getElementById("vidaMaxima").value = vidaMaxima;
    document.getElementById("eterMaximo").value = eterMaximo;
    document.getElementById("estaminaMaxima").value = estaminaMaxima;
  }

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      calcularDTA();
      calcularRecursos();
    });
  });

  calcularDTA();
  calcularRecursos();
});
function irPara(pagina) {
    window.location.href = pagina;
}

function salvarDados() {
    const campos = document.querySelectorAll("input");
    const dados = {};
    campos.forEach((campo) => {
        dados[campo.id] = campo.value;
    });
    localStorage.setItem("fichaPersonagem", JSON.stringify(dados));
    alert("Dados salvos com sucesso!");
}

function carregarDados() {
    const dados = JSON.parse(localStorage.getItem("fichaPersonagem"));
    if (dados) {
        const campos = document.querySelectorAll("input");
        campos.forEach((campo) => {
            if (dados[campo.id] !== undefined) {
                campo.value = dados[campo.id];
            }
        });
        alert("Dados carregados com sucesso!");
    } else {
        alert("Nenhum dado salvo encontrado.");
    }
}
document.getElementById("roll-dice").addEventListener("click", function () {
    const diceType = parseInt(document.getElementById("dice-type").value);
    const diceQuantity = parseInt(document.getElementById("dice-quantity").value);

    if (isNaN(diceQuantity) || diceQuantity < 1) {
        alert("Por favor, insira uma quantidade válida de dados.");
        return;
    }

    let results = [];
    for (let i = 0; i < diceQuantity; i++) {
        const roll = Math.floor(Math.random() * diceType) + 1;
        results.push(roll);
    }

    // Exibir resultados
    const resultsElement = document.getElementById("results");
    resultsElement.textContent = results.join(", ");
});