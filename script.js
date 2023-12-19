//WhatsApp

document.getElementById("abrir-formulario").addEventListener("click", function (e) {
    e.preventDefault();
    var formulario = document.getElementById("formulario");
    formulario.classList.remove("hidden");
});

document.getElementById("enviar").addEventListener("click", function () {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;

    // Abra o WhatsApp com as respostas do formulário como mensagem prévia
    var mensagemPrevia = `Olá, tenho interesse:%0A%0ANome: ${nome}%0AMensagem: ${mensagem}`;
    var numeroWhatsApp = "16994262220";
    var linkWhatsApp = `https://api.whatsapp.com/send?phone=${16994262220}&text=${mensagemPrevia}`;
    window.open(linkWhatsApp, "_blank");

    // Exibe as respostas do formulário
    var respostas = document.getElementById("respostas");
    respostas.classList.remove("hidden");
    document.getElementById("resposta-nome").textContent = `Nome: ${nome}`;
    document.getElementById("resposta-mensagem").textContent = `Mensagem: ${mensagem}`;
});

var fecharFormulario = document.getElementById("fechar-formulario");
fecharFormulario.addEventListener("click", function () { // Adicione esta função
    formulario.classList.add("hidden");
});