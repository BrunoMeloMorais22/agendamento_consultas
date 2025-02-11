
function porcima(element) {
    element.style.transform = "translateY(-5px)";
    element.style.transition = "transform 0.3s ease";
}

function sair(element) {
    element.style.transform = "translateY(0)"; 
}

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");

    if (sidebar.style.right === "-240px" || sidebar.style.right === "") {
        sidebar.style.right = "0";
    } else {
        sidebar.style.right = "-240px";
    }
}