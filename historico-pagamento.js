const rents = [
    { mes: "Fevereiro / 2026", pagoEm: "10/02/2026", valor: "R$ 850,00" },
    { mes: "Março / 2026", pagoEm: "10/03/2026", valor: "R$ 850,00" },
    { mes: "Abril / 2026", pagoEm: "10/04/2026", valor: "R$ 850,00" },
    { mes: "Maio / 2026", pagoEm: "10/05/2026", valor: "R$ 850,00" },
    { mes: "Fevereiro / 2025", pagoEm: "10/02/2025", valor: "R$ 850,00" },
    { mes: "Março / 2025", pagoEm: "10/03/2025", valor: "R$ 850,00" },
    { mes: "Abril / 2025", pagoEm: "10/04/2025", valor: "R$ 850,00" },
    { mes: "Maio / 2025", pagoEm: "10/05/2025", valor: "R$ 850,00" },
    // pode ter mais registros, não tem problema
];

const list = document.getElementById("rentList");

/* CONFIGURAÇÃO */
const LAST_MONTHS = 12;


/* PEGAR APENAS OS ÚLTIMOS 12 */
const recentRents = rents.slice(-LAST_MONTHS);


/* GERAR CARDS – HISTÓRICO (INQUILINO) */
recentRents.forEach(item => {
    const card = document.createElement("div");
    card.className = "rent-card";

    card.innerHTML = `
        <div class="rent-info">
            <strong>${item.mes}</strong>
            <span class="status-paid">🟢 Pagamento confirmado</span>
            <span>Pago em ${item.pagoEm}</span>
        </div>

        <div class="rent-action">
            <span class="rent-value">${item.valor}</span>
        </div>
    `;

    list.appendChild(card);
});

/* BOTÃO VOLTAR */
document.getElementById("btnVoltar").addEventListener("click", () => {
    window.location.href = "dashboard-inquilino.html";
});
