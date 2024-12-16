let nomsLoaded = false;

document.getElementById('loadNamesBtn').addEventListener('click', function() {
    if (!nomsLoaded) {
        carregarNoms();
        nomsLoaded = true;
        document.getElementById('spinBtn').disabled = false;
    }
});

function carregarNoms() {
    const wheel = document.getElementById('wheel');
    const numberOfSections = noms.length;
    const anglePerSection = 360 / numberOfSections;

    // Eliminar cualquier nombre anterior
    wheel.querySelectorAll('.name').forEach(e => e.remove());

    noms.forEach((nom, index) => {
        const angle = anglePerSection * index;
        const nomElement = document.createElement('div');
        nomElement.textContent = nom;
        nomElement.classList.add('name');
        
        // Posicionar y rotar los nombres para que estén bien distribuidos
        nomElement.style.transform = `rotate(${angle}deg) translateY(-130px) rotate(-${angle}deg)`;

        wheel.appendChild(nomElement);
    });
}
