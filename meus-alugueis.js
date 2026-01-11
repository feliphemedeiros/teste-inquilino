const rents = [
    { mes: "Fevereiro / 2026", venceEm: 31, valor: "R$ 850,00" },
    { mes: "Março / 2026", venceEm: 59, valor: "R$ 850,00" },
    { mes: "Abril / 2026", venceEm: 90, valor: "R$ 850,00" },
    { mes: "Maio / 2026", venceEm: 121, valor: "R$ 850,00" },
    { mes: "Junho / 2026", venceEm: 151, valor: "R$ 850,00" },
    { mes: "Julho / 2026", venceEm: 181, valor: "R$ 850,00" },
    { mes: "Agosto / 2026", venceEm: 31, valor: "R$ 850,00" },
    { mes: "Setembro / 2026", venceEm: 59, valor: "R$ 850,00" },
    { mes: "Outubro / 2026", venceEm: 90, valor: "R$ 850,00" },
    { mes: "Novembro / 2026", venceEm: 121, valor: "R$ 850,00" },
    { mes: "Dezembro / 2026", venceEm: 151, valor: "R$ 850,00" }
];

const list = document.getElementById("rentList");

/* GERAR CARDS */
rents.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "rent-card";

    card.innerHTML = `
        <div class="rent-info">
            <strong>${item.mes}</strong>
            <span class="status-open">🔵 Em aberto</span>
            <span>Vence em ${item.venceEm} dia(s)</span>
        </div>

        <div class="rent-action">
            <span class="rent-value">${item.valor}</span>
            <button class="pay-btn" data-index="${index}">
                Pagar PIX
            </button>
        </div>
    `;

    list.appendChild(card);
});

/* CLIQUE NO BOTÃO PAGAR PIX */
document.querySelectorAll(".pay-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "./pix.html";
    });
});

/* BOTÃO VOLTAR */
document.getElementById("btnVoltar").addEventListener("click", () => {
    window.location.href = "dashboard-inquilino.html";
});

