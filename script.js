import { exec } from "child_process";

const url = "https://gilbertojunior06.github.io/aula_front-end/";

// Abrir no navegador padrão (Brave, se estiver configurado como padrão)
exec(`start ${url}`, (err) => {
  if (err) {
    console.error("❌ Erro ao abrir site:", err);
  } else {
    console.log("🌐 Site aberto no navegador padrão!");
  }
});
