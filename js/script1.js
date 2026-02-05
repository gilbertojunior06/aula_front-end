// script.js
const btnFlex = document.getElementById("btnFlex");
const btnGrid = document.getElementById("btnGrid");
const demoContainer = document.getElementById("demoContainer");
const txtAxis = document.getElementById("txtAxis");
const txtIdeal = document.getElementById("txtIdeal");

function gerarItens(qtd = 6) {
  demoContainer.innerHTML = "";
  for (let i = 1; i <= qtd; i++) {
    const item = document.createElement("div");
    item.className = "demo-item";
    item.textContent = i;
    demoContainer.appendChild(item);
  }
}

gerarItens();

btnFlex.addEventListener("click", () => {
  demoContainer.className = "demo-container mode-flex";
  btnFlex.classList.add("active-flex");
  btnGrid.classList.remove("active-grid");

  txtAxis.textContent = "Unidimensional";
  txtIdeal.textContent =
    "O layout é calculado item a item. Ótimo para distribuir espaço em uma linha";

  gerarItens();
});

btnGrid.addEventListener("click", () => {
  demoContainer.className = "demo-container mode-grid";
  btnGrid.classList.add("active-grid");
  btnFlex.classList.remove("active-flex");

  txtAxis.textContent = "Bidimensional";
  txtIdeal.textContent =
    "O layout é calculado considerando linhas e colunas. Ótimo para estruturas completas.";

  gerarItens();
});
