
document.getElementById("formCadastro").addEventListener("submit", function(event){
    event.preventDefault()

    emailCadastro = document.getElementById("emailCadastro").value
    telefoneCadastro = document.getElementById("telefoneCadastro").value
    senhaCadastro = document.getElementById("senhaCadastro").value
    confirmarsenha = document.getElementById("confirmarsenha").value
    feedbackCadastro = document.getElementById("feedbackCadastro")

    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 

    if(confirmarsenha !== senhaCadastro){
        feedbackCadastro.textContent = "As senhas não combinam"
        feedbackCadastro.style.color = "red"
        return
    }

    if(regex.test(senhaCadastro)){
        localStorage.setItem("email", emailCadastro)
        localStorage.setItem("senha", senhaCadastro)

        feedbackCadastro.textContent = "Conta criada. Faça Login"
        feedbackCadastro.style.color = "green"
        feedbackCadastro.style.fontWeight = "900"
        feedbackCadastro.style.fontSize = "18px"
    }

    else{
        feedbackCadastro.textContent = "A senha precisa conter 8 caracteres, 1 caractere maiúsculo, 1 caractere especial e 1 número"
        feedbackCadastro.style.color = "red"
        feedbackCadastro.style.fontWeight = "900"
    }

})
