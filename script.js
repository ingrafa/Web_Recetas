document.addEventListener("DOMContentLoaded", function() {
    mostrarRecetas();

    document.getElementById('enviar-btn').addEventListener('click', function() {
        guardarReceta();
    });
});

function guardarReceta() {
    var nombreReceta = document.getElementById('nombre-receta').value;
    var ingredientes = document.getElementById('ingredientes').value;
    var pasos = document.getElementById('pasos').value;
    var receta = {
        nombre: nombreReceta,
        ingredientes: ingredientes,
        pasos: pasos
    };
    var recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    recetas.push(receta);
    localStorage.setItem('recetas', JSON.stringify(recetas));
    mostrarRecetas();
    document.getElementById('formulario-receta').reset();
}

function mostrarRecetas() {
    var recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    var listaRecetas = document.getElementById('lista-recetas');
    listaRecetas.innerHTML = '';
    recetas.forEach(function(receta) {
        var item = document.createElement('li');
        item.innerHTML = '<h3>' + receta.nombre + '</h3><p>Ingredientes: ' + receta.ingredientes + '</p><p>Pasos: ' + receta.pasos + '</p>';
        listaRecetas.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarRecetas();

    document.getElementById('enviar-btn').addEventListener('click', function() {
        guardarReceta();
    });

    document.getElementById('buscar-receta').addEventListener('input', function() {
        filtrarRecetas();
    });
});

function filtrarRecetas() {
    var filtro = document.getElementById('buscar-receta').value.toLowerCase();
    var recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    var listaRecetas = document.getElementById('lista-recetas');
    listaRecetas.innerHTML = '';
    recetas.forEach(function(receta) {
        if (receta.nombre.toLowerCase().includes(filtro)) {
            var item = document.createElement('li');
            item.innerHTML = '<h3>' + receta.nombre + '</h3><p>Ingredientes: ' + receta.ingredientes + '</p><p>Pasos: ' + receta.pasos + '</p>';
            listaRecetas.appendChild(item);
        }
    });
}

// Resto del código anterior de guardarReceta() y mostrarRecetas()

document.addEventListener("DOMContentLoaded", function() {
    mostrarRecetas();

    document.getElementById('enviar-btn').addEventListener('click', function() {
        guardarReceta();
    });

    document.getElementById('buscar-receta').addEventListener('input', function() {
        filtrarRecetas();
    });

    // Menú desplegable
    var botonMenu = document.getElementById('boton-menu');
    var menu = document.getElementById('menu');

    botonMenu.addEventListener('click', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});
