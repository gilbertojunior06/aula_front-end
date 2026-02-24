const paragrafo = document.getElementById("paragrafo");
const h3_titulo = document.getElementById("titulo_h3");

const li_first = document.getElementById("text_li");
const checkbox_first = document.getElementById("firt_to_do");

paragrafo.innerText = "novo texto mudado pelo js";

function mudar_texto_titulo() {
    h3_titulo.innerHTML = "mudar texto titulo";
}

function sublinhar_texto() {
    li_first.style.setProperty("text-decoration", "underline");
    li_first.style.setProperty("text-decoration-thickness", "3px");
    li_first.style.setProperty("text-decoration-color", "blue"); // cor do sublinhado
}

// Ouvindo o evento no checkbox
checkbox_first.addEventListener("change", () => {
    if (checkbox_first.checked) {
        li_first.style.textDecoration = "underline";          // sublinha
        li_first.style.textDecorationThickness = "3px";       // espessura maior
        li_first.style.textDecorationColor = "blue";          // cor do sublinhado
        li_first.style.backgroundColor = "yellow";            // marca-texto
        li_first.style.color = "black";                       // cor normal
    } else {
        li_first.style.textDecoration = "none";               // remove sublinhado
        li_first.style.backgroundColor = "transparent";       // remove marca-texto
        li_first.style.color = "red";                         // marca como não concluído
    }
});
