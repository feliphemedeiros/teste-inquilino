 document.getElementById("btnVoltar").addEventListener("click", () => {
        if (history.length > 1) {
            history.back();
        } else {
            window.location.href = "dashboard-inquilino.html";
        }
    });