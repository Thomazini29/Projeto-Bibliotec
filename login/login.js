

// console.log("Hello World!!")

// alert("Hello World!!")

// var nome = "Késsia" -- !não vamos usar o var pois da muito problema

let nome = "Késsia"
console.log(nome)

// const nome = "Késsia"

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");


btnSenha.addEventListener("click", function() {
    
    // if(campoSenha.type == "password")
    // {
    //     campoSenha.type = "text";
    // }
    // else
    // {
    //     campoSenha.type = "password";
    // }

    campoSenha.type = campoSenha.type == "password" ? "text" : "password";
    
});