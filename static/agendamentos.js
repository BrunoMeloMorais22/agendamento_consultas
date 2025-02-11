
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formAgendamento");

    form.addEventListener("submit", function (event) {
        event.preventDefault();


        fetch("/agendamentos", {
            method: "POST",
            body: new FormData(form),
        })
        .then(response => {
            if (response.ok) {
                alert("Consulta agendada!"); 
                window.location.href = "/minhasconsultas"; 
            } else {
                alert("Ocorreu um erro ao agendar a consulta.");
            }
        })
        .catch(error => console.error("Erro:", error));
    });
});
