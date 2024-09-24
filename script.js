const clickear = (asiento) => {
    
    if (asiento.classList.contains('occupied')) {
        alert("Este asiento ya está reservado.");
        return;
    }

    
    if (asiento.classList.contains('selected')) {
        asiento.classList.remove('selected');
        asiento.classList.add('available'); 
        asiento.style.background = '#ffffff'; 
    } else {
        asiento.classList.add('selected');
        asiento.classList.remove('available'); 
        asiento.style.background = '#00ffff'; 
    }
};


function reservar() {
    const asientosSeleccionados = document.querySelectorAll('.asiento.selected');
    
    if (asientosSeleccionados.length === 0) {
        alert("No has seleccionado ningún asiento.");
        return;
    }

    asientosSeleccionados.forEach(asiento => {
        asiento.classList.remove('selected');
        asiento.classList.add('occupied'); 
        asiento.style.background = '#ff00ff'; 
    });

    alert("Asientos reservados exitosamente.");
}
