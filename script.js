const container = document.getElementById('demoContainer');
        const btnFlex = document.getElementById('btnFlex');
        const btnGrid = document.getElementById('btnGrid');
        const txtAxis = document.getElementById('txtAxis');
        const txtIdeal = document.getElementById('txtIdeal');

        // Criação dos itens da galeria
        const items = 8;
        for (let i = 1; i <= items; i++) {
            const item = document.createElement('div');
            item.className = 'gallery-item';
           
            // Gerar cor baseada no índice
            const hue = (i * 40) % 360;
           
            item.innerHTML = `
                <div class="img-box" style="background: linear-gradient(135deg, hsl(${hue}, 70%, 60%), hsl(${hue}, 70%, 40%))">
                    Item ${i}
                </div>
                <div class="content-box">
                    <h4>Card Exemplo ${i}</h4>
                    <p>Observe como este elemento se comporta ao alternar entre os modos de exibição.</p>
                </div>
            `;
            container.appendChild(item);
        }

        function setMode(mode) {
            if (mode === 'flex') {
                container.className = 'demo-container mode-flex';
                btnFlex.classList.add('active-flex');
                btnGrid.classList.remove('active-grid');
               
                txtAxis.innerText = "Unidimensional (Linha)";
                txtIdeal.innerText = "O layout é calculado item a item. Ótimo para distribuir espaço em uma linha.";
            } else {
                container.className = 'demo-container mode-grid';
                btnGrid.classList.add('active-grid');
                btnFlex.classList.remove('active-flex');
               
                txtAxis.innerText = "Bidimensional (Grade)";
                txtIdeal.innerText = "Define a estrutura primeiro. Alinhamento rigoroso de colunas e linhas.";
            }
        }