const btn = document.getElementById("copyPixBtn");

const pixCode = `
00020126580014br.gov.bcb.pix0136chave-pix-exemplo@banco.com
5204000053039865802BR5920NOME DO RECEBEDOR6009SAO PAULO
6304ABCD
`;

btn.addEventListener("click", () => {
    navigator.clipboard.writeText(pixCode);

    btn.innerHTML = "✔ Código PIX copiado";

    setTimeout(() => {
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512 512"
             width="22"
             height="22"
             fill="currentColor"
             aria-hidden="true">
            <path d="M242.4 292.5c5.4-5.4 14.7-5.4 20.1 0l77 77c14.2 14.2 33.1 22 53.1 22l15.1 0-97.1 97.1c-30.3 29.5-79.5 29.5-109.8 0l-97.5-97.4 9.3 0c20 0 38.9-7.8 53.1-22l76.7-76.7zm20.1-73.6c-6.4 5.5-14.6 5.6-20.1 0l-76.7-76.7c-14.2-15.1-33.1-22-53.1-22l-9.3 0 97.4-97.4c30.4-30.3 79.6-30.3 109.9 0l97.2 97.1-15.2 0c-20 0-38.9 7.8-53.1 22l-77 77zM112.6 142.7c13.8 0 26.5 5.6 37.1 15.4l76.7 76.7c7.2 6.3 16.6 10.8 26.1 10.8 9.4 0 18.8-4.5 26-10.8l77-77c9.8-9.7 23.3-15.3 37.1-15.3l37.7 0 58.3 58.3c30.3 30.3 30.3 79.5 0 109.8l-58.3 58.3-37.7 0c-13.8 0-27.3-5.6-37.1-15.4l-77-77c-13.9-13.9-38.2-13.9-52.1 .1l-76.7 76.6c-10.6 9.8-23.3 15.4-37.1 15.4l-31.8 0-58-58c-30.3-30.3-30.3-79.5 0-109.8l58-58.1 31.8 0z"/>
        </svg>
        <span>Copiar código PIX</span>
    `;
}, 3000);

});

// BOTAO DE VOLTAR
document.addEventListener("DOMContentLoaded", () => {
    const btnVoltar = document.getElementById("btnVoltar");

    btnVoltar.addEventListener("click", () => {
        if (history.length > 1) {
            history.back();
        } else {
            window.location.href = "meus-alugueis.html";
        }
    });
});

// TOGGLE QR CODE
const toggleQrBtn = document.getElementById("toggleQr");
const qrBox = document.getElementById("qrBox");

toggleQrBtn.addEventListener("click", () => {
    const isOpen = !qrBox.classList.contains("hidden");

    qrBox.classList.toggle("hidden");

    toggleQrBtn.textContent = isOpen
        ? "Mostrar QR Code"
        : "Ocultar QR Code";
});


// Gerar QR Code
QRCode.toCanvas(
    document.getElementById("qrcode"),
    pixCode.trim(),
    {
        width: 180,
        margin: 2
    }
);


/* ===============================
   POP-UP INFORMATIVO SEMPRE APARECE
================================ */

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("paymentPopup");
    const closeBtn = document.getElementById("closePopup");

    // sempre mostra o pop-up ao entrar na tela
    popup.style.display = "flex";

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
});


/* ===============================
   POP-UP INFORMATIVO APENAS 1 VEZ
================================
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("paymentPopup");
    const closeBtn = document.getElementById("closePopup");

    // chave única dessa tela
    const popupKey = "payment_popup_seen";

    // mostra só se ainda não foi visto
    if (!localStorage.getItem(popupKey)) {
        popup.style.display = "flex";
    } else {
        popup.style.display = "none";
    }

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
        localStorage.setItem(popupKey, "true");
    });
}); */


/* ===============================
   POP-UP INFORMATIVO APARECE 1 VEZ AO DIA
================================ 
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("paymentPopup");
    const closeBtn = document.getElementById("closePopup");

    // pega a data de hoje (YYYY-MM-DD)
    const today = new Date().toISOString().split("T")[0];

    // chave no localStorage
    const popupKey = "payment_popup_last_seen";

    // data da última exibição
    const lastSeen = localStorage.getItem(popupKey);

    // só mostra se ainda não foi visto hoje
    if (lastSeen !== today) {
        popup.style.display = "flex";
    } else {
        popup.style.display = "none";
    }

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
        localStorage.setItem(popupKey, today);
    });
});*/
