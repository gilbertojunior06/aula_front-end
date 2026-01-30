import open from "open";

const url = "https://gilbertojunior06.github.io/aula_front-end/";

// Forçar abrir no Brave
open(url, { app: { name: "brave" } })
  .then(() => console.log("🌐 Site aberto no Brave!"))
  .catch(err => console.error("❌ Erro ao abrir site:", err));
