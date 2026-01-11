const rents = [
    { mes: "Fevereiro / 2026", pagoEm: "10/02/2026", valor: "R$ 850,00" },
    { mes: "Março / 2026", pagoEm: "10/03/2026", valor: "R$ 850,00" },
    { mes: "Abril / 2026", pagoEm: "10/04/2026", valor: "R$ 850,00" },
    { mes: "Maio / 2026", pagoEm: "10/05/2026", valor: "R$ 850,00" },
     { mes: "Fevereiro / 2026", pagoEm: "10/02/2026", valor: "R$ 850,00" },
    { mes: "Março / 2026", pagoEm: "10/03/2026", valor: "R$ 850,00" },
    { mes: "Abril / 2026", pagoEm: "10/04/2026", valor: "R$ 850,00" },
    { mes: "Maio / 2026", pagoEm: "10/05/2026", valor: "R$ 850,00" },
     { mes: "Fevereiro / 2026", pagoEm: "10/02/2026", valor: "R$ 850,00" },
    { mes: "Março / 2026", pagoEm: "10/03/2026", valor: "R$ 850,00" },
    { mes: "Abril / 2026", pagoEm: "10/04/2026", valor: "R$ 850,00" },
    { mes: "Maio / 2026", pagoEm: "10/05/2026", valor: "R$ 850,00" },
];

const list = document.getElementById("rentList");

/* GERAR CARDS – HISTÓRICO */
rents.forEach((item, index) => {
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
            <button class="receipt-btn" data-index="${index}">
                Gerar recibo
            </button>
        </div>
    `;

    list.appendChild(card);
});

/* CLIQUE EM GERAR RECIBO */
document.querySelectorAll(".receipt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Recibo gerado com sucesso (simulação)");
        // Futuro: abrir PDF ou baixar recibo
    });
});

/* BOTÃO VOLTAR */
document.getElementById("btnVoltar").addEventListener("click", () => {
    window.location.href = "./index.html";
});


