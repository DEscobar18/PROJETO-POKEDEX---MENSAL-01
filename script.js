const formulario = document.getElementById("loginPokedex");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if (email && senha) {
        alert("Login realizado com sucesso!");
    }

});