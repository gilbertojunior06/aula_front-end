// script.js

// Seleciona elementos
const passwordInput = document.getElementById("passwordInput");
const strenghtBar = document.getElementById("strenght-bar");
const strenghtText = document.getElementById("strenghtText");
const btnScan = document.getElementById("btnScan");
const terminal = document.getElementById("terminal");
const togglePassword = document.getElementById("togglePassword");

// Função para avaliar força da senha
function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length > 6) strength++;
    if (password.length > 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    return strength;
}

// Atualiza barra e texto conforme digitação
passwordInput.addEventListener("input", () => {
    const strength = checkPasswordStrength(passwordInput.value);

    strenghtBar.style.width = (strength * 20) + "%";

    let text = "Segurança: Nula";
    let color = "red";

    switch (strength) {
        case 1:
            text = "Segurança: Fraca";
            color = "orange";
            break;
        case 2:
            text = "Segurança: Média";
            color = "yellow";
            break;
        case 3:
            text = "Segurança: Boa";
            color = "lightgreen";
            break;
        case 4:
            text = "Segurança: Forte";
            color = "green";
            break;
        case 5:
            text = "Segurança: Excelente";
            color = "lime";
            break;
    }

    strenghtBar.style.backgroundColor = color;
    strenghtText.textContent = text;
});

// Simulação de scan no terminal
btnScan.addEventListener("click", () => {
    terminal.innerHTML = "<div>> Iniciando scan de vulnerabilidades...</div>";

    setTimeout(() => {
        terminal.innerHTML += "<div>> Verificando portas abertas...</div>";
    }, 1000);

    setTimeout(() => {
        terminal.innerHTML += "<div>> Nenhuma vulnerabilidade crítica encontrada.</div>";
    }, 2000);

    setTimeout(() => {
        terminal.innerHTML += "<div>> Scan concluído com sucesso!</div>";
    }, 3000);
});

function avaliarSenha(senha, nomeUsuario) {
    let score = 0;

    // comprimento
    if (senha.length >= 8) score++;
    if (senha.length >= 12) score++;

    // diversidade de caracteres
    if (/[A-Z]/.test(senha)) score++;
    if (/[0-9]/.test(senha)) score++;
    if (/[^A-Za-z0-9]/.test(senha)) score++;

    // verificação se contém o nome do usuário
    if (senha.toLowerCase().includes(nomeUsuario.toLowerCase())) {
        score = 0; // senha considerada fraca se contém o nome
        console.log("⚠️ A senha contém o nome do usuário, insegura!");
    }

    return score;
}

// Exemplo de teste
const nomeUsuario = "joao";
const senhaDigitada = "joao123!";
const resultado = avaliarSenha(senhaDigitada, nomeUsuario);

console.log("Pontuação da senha:", resultado);


togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";   // mostra a senha
        togglePassword.textContent = "Ocultar";
    } else {
        passwordInput.type = "password"; // volta a esconder
        togglePassword.textContent = "Mostrar";
    }
});
