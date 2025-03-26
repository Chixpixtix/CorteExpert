// Evento para agregar un cliente
document.getElementById('add-client').addEventListener('click', function() {
    const name = prompt('Ingrese el nombre del cliente:');
    const service = prompt('Ingrese el servicio solicitado (corte, afeitado, etc.):');
    const time = new Date().toLocaleTimeString();

    if (name && service) {
        addClientToTable(name, service, time);
    } else {
        alert('Por favor ingrese todos los datos.');
    }
});

// Función para agregar un cliente a la tabla
function addClientToTable(name, service, time) {
    const table = document.getElementById('client-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    const nameCell = row.insertCell(0);
    const serviceCell = row.insertCell(1);
    const timeCell = row.insertCell(2);
    const actionsCell = row.insertCell(3);

    nameCell.textContent = name;
    serviceCell.textContent = service;
    timeCell.textContent = time;

    // Crear un botón para marcar como atendido
    const attendedButton = document.createElement('button');
    attendedButton.textContent = 'Marcar como Atendido';
    attendedButton.addEventListener('click', function() {
        markAsAttended(row);
    });
    actionsCell.appendChild(attendedButton);
}

// Función para marcar como atendido
function markAsAttended(row) {
    row.style.backgroundColor = '#d3ffd3'; // Cambio de color para indicar que fue atendido
    const button = row.cells[3].getElementsByTagName('button')[0];
    button.disabled = true; // Desactivar el botón
    button.textContent = 'Atendido';
}

// Función para agregar comisiones de barberos (por ejemplo, se puede llamar cuando se agrega un corte)
function addCommissionToTable(barber, service, commission) {
    const table = document.getElementById('barber-commissions-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    const barberCell = row.insertCell(0);
    const serviceCell = row.insertCell(1);
    const commissionCell = row.insertCell(2);

    barberCell.textContent = barber;
    serviceCell.textContent = service;
    commissionCell.textContent = commission;
}
