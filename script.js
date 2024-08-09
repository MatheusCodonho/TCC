// const wrapper =document.querySelector(".wrapper"),
// qrInput = wrapper.querySelector(".form input"),
// generateBtn =wrapper.querySelector(".form button"),
// qrImg = wrapper.querySelector(".qr-code img");

// generateBtn.addEventListener("click", () => {
//     let qrValue = qrInput.value;
//     if(!qrValue) return;
//     generateBtn.innerText = "Gerando um Qr Code..."
//     qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
//     qrImg.addEventListener("load", () => {
//         generateBtn.innerText = "Gerar Qr Code"
//         wrapper.classList.add("active");
//     });
   
// });

// qrInput.addEventListener("keyup", () => {
//     if(!qrInput.value){
//         wrapper.classList.remove("active");
//     }
// });
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
}
