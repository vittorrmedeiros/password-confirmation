function janela() {
    vrido = document.getElementById("senha").value
    tauba = document.getElementById("csenha").value

    if(vrido == tauba) {
        alert("Bem vindo de volta!");
    } else {
        alert("As senhas não coincidem")
    }
}