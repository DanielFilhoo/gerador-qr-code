const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img")

// Eventos //

//GERAR QR CODE//
function generatQrCode(){
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load",() => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";

    })

};

qrCodeBtn.addEventListener("click",() => {
    generatQrCode();

});

qrCodeInput.addEventListener("keydown",(e) => {
   if(e.code === "Enter"){
    generatQrCode();
   }
});


//LIMPAR AREA DO QR CODE//

qrCodeInput.addEventListener("keyup",() => {
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";

    }
});

