// Al hacer clic en una materia
document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    const correlativas = materia.dataset.correlativas;
    const desbloqueada = materia.classList.contains('desbloqueada');
    const sinCorrelativas = correlativas === "";

    if (desbloqueada || sinCorrelativas) {
      materia.classList.toggle('tachada');
      desbloquearMaterias(); // actualiza el estado de las otras
    }
  });
});

// Función que desbloquea materias si se tacharon sus correlativas
function desbloquearMaterias() {
  document.querySelectorAll('.materia').forEach(materia => {
    const correlativas = materia.dataset.correlativas;

    if (correlativas && correlativas !== "") {
      const requisitos = correlativas.split(',');
      const cumplidos = requisitos.every(id =>
        document.querySelector(.materia[data-id="${id}"])?.classList.contains('tachada')
      );

      if (cumplidos) {
        materia.classList.add('desbloqueada');
      }
    } else {
      materia.classList.add('desbloqueada');
    }
  });
}

// Ejecutar al cargar la página
desbloquearMaterias();
