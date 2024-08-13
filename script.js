//Gerar o qr code na outra caixa
const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = document.querySelector("#generate-qr"),
    qrImg = document.querySelector(".caixa2 .qr-code img"); // Atualiza a referência da imagem para a caixa2

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Gerando um Qr Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar Qr Code";
        document.querySelector(".caixa2").classList.add("active"); // Adiciona classe se necessário
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        document.querySelector(".caixa2").classList.remove("active"); // Remove classe se necessário
    }
});

// Função para copiar o valor das caixas de texto para a caixa2
function copiarTexto() {
    document.getElementById('caixa2').value = document.getElementById('caixa1').value;
    document.getElementById('caixa4').value = document.getElementById('caixa3').value;
    document.getElementById('caixa6').value = document.getElementById('caixa5').value;
    document.getElementById('caixa8').value = document.getElementById('caixa7').value;
    document.getElementById('matricula1').value = document.getElementById('matricula').value;
}

// //carregar imagem 
// document.getElementById('imagem').addEventListener('change', function(event) {
//     const arquivo = event.target.files[0];
//     const container = document.getElementById('imagem-container');
//     container.innerHTML = ''; // Limpa o container

//     if (arquivo) {
//         const leitor = new FileReader();
//         leitor.onload = function(e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             img.style.maxWidth = '300px'; // Limita a largura da imagem
//             container.appendChild(img);
//         }
//         leitor.readAsDataURL(arquivo);
//     }
// });

// //imagem gerada na caixa2
// document.getElementById('imagem').addEventListener('change', function(event) {
//     const arquivo = event.target.files[0];
//     const container = document.getElementById('imagem-container');
//     const caixa2Img = document.getElementById('caixa2-img');
    
//     container.innerHTML = ''; // Limpa o container

//     if (arquivo) {
//         const leitor = new FileReader();
//         leitor.onload = function(e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             img.style.maxWidth = '300px'; // Limita a largura da imagem
//             container.appendChild(img);

//             // Atualiza a imagem na caixa2
//             caixa2Img.src = e.target.result;
//         }
//         leitor.readAsDataURL(arquivo);
//     }
// });

// document.getElementById('imagem').addEventListener('change', function(event) {
//     const arquivo = event.target.files[0];
//     const container = document.getElementById('imagem-container');

//     container.innerHTML = ''; // Limpa o container

//     if (arquivo) {
//         const leitor = new FileReader();
//         leitor.onload = function(e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             container.appendChild(img);
//         }
//         leitor.readAsDataURL(arquivo);
//     }
// });

// function copiarTexto() {
//     // Função para copiar o texto de caixas de entrada, se necessário.
// }
document.getElementById('imagem').addEventListener('change', function(event) {
    const arquivo = event.target.files[0];
    const container = document.getElementById('imagem-container');
    const caixa2Img = document.getElementById('caixa2-img');
    
    container.innerHTML = ''; // Limpa o container

    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '300px'; // Limita a largura da imagem
            container.appendChild(img);

            // Atualiza a imagem na caixa2
            caixa2Img.src = e.target.result;
        }
        leitor.readAsDataURL(arquivo);
    }
});

function copiarTexto() {
    document.getElementById('caixa2').value = document.getElementById('caixa1').value;
    document.getElementById('caixa4').value = document.getElementById('caixa3').value;
    document.getElementById('caixa6').value = document.getElementById('caixa5').value;
    document.getElementById('caixa8').value = document.getElementById('caixa7').value;
    document.getElementById('matricula1').value = document.getElementById('matricula').value;
}
