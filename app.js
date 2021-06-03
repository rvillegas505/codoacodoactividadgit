let nombre1 = document.getElementById('nombre1');
let edad1 = document.getElementById('edad1');
let nombre2 = document.getElementById('nombre2');
let edad2 = document.getElementById('edad2');
let nombre3 = document.getElementById('nombre3');
let edad3 = document.getElementById('edad3');
let form = document.getElementById("form");
let nMayor;
let eMayor;

form.addEventListener("submit", e => {
    let nUsuario1 = nombre1.value;
    let eUsuario1 = parseInt(edad1.value);

    let nUsuario2 = nombre2.value;
    let eUsuario2 = parseInt(edad2.value);

    let nUsuario3 = nombre3.value;
    let eUsuario3 = parseInt(edad3.value);


    let arrayUsuarios = [{
            nombre: nUsuario1,
            edad: eUsuario1
        },
        {
            nombre: nUsuario2,
            edad: eUsuario2
        },
        {
            nombre: nUsuario3,
            edad: eUsuario3
        }
    ];
    var edadMayor = 0;
    let usuario;
    for (var i = 0; i < arrayUsuarios.length; i++) {
        if (edadMayor < arrayUsuarios[i].edad) {
            edadMayor = arrayUsuarios[i].edad;
            usuario = arrayUsuarios[i];
        }
    }
    alert('el usuario de mayor edad es ' + usuario.nombre + ' y tiene ' + usuario.edad);
});