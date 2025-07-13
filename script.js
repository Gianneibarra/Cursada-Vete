document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    const correlativas = materia.dataset.correlativas;
    const desbloqueada = materia.classList.contains('desbloqueada');
    const sinCorrelativas = correlativas === "";
    
    if (desbloqueada || sinCorrelativas) {
      materia.classList.toggle('tachada');
      desbloquearMaterias();
    }
  });
});

function desbloquearMaterias() {
  document.querySelectorAll('.materia').forEach(materia => {
    const correlativas = materia.dataset.correlativas;
    
    if (correlativas && correlativas !== "") {
      const requisitos = correlativas.split(',');
      const cumplidos = requisitos.every(id => 
        document.querySelector(.`materia[data-id="${id}"])?.classList.contains('tachada')
      );
      
      if (cumplidos) {
        materia.classList.add('desbloqueada');
      }
    } else {
      materia.classList.add('desbloqueada');
    }
  });
}

// Inicializar desbloqueo
desbloquearMaterias();
