
function cancelar(){
    alert("Consulta cancelada")

    let lista = document.getElementById("lista")
    lista.remove()

    let h2 = document.getElementById("consultas")
    h2.innerHTML = "Nenhuma consulta agendada"
}