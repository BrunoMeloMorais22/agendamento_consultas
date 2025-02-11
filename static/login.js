
document.getElementById("formLogin").addEventListener("submit", function(event){
    event.preventDefault()

    let emailLogin = document.getElementById("emailLogin").value
    let senhaLogin = document.getElementById("senhaLogin").value
    let feedbackLogin = document.getElementById("feedbackLogin")

    const emailSalvo = localStorage.getItem("email")
    const senhaSalva = localStorage.getItem("senha")

    if(emailLogin === emailSalvo && senhaLogin === senhaSalva){
        feedbackLogin.textContent = "Logado com sucesso"
        feedbackLogin.style.color = "green"
        feedbackLogin.style.fontWeight = "900"

        setTimeout(() =>{
            window.location.href = "/index2?emailLogin=" + encodeURIComponent(emailLogin) + "&senhaLogin=" + encodeURIComponent(senhaLogin);
        }, 2000)
    }

    else{
        feedbackLogin.textContent = "Email ou Senha inválidos"
        feedbackLogin.style.color = "red"
        feedbackLogin.style.fontWeight = "900"
    }
})
