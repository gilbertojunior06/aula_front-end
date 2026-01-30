import open from "open";

const url = "https://gilbertojunior06.github.io/aula_front-end/";

open(url)
  .then(() => console.log("🌐 Site aberto no navegador!"))
  .catch(err => console.error("❌ Erro ao abrir site:", err));
