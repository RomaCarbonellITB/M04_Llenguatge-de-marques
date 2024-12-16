let names = [];

document.getElementById('add-name-button').addEventListener('click', loadNames);

function loadNames() {
    fetch('noms.txt')
        .then(response => response.text())
        .then(data => {
            names = data.split('\n').filter(name => name.trim() !== '');
            if (names.length > 0) {
                document.getElementById('spin-wheel-button').disabled = false;
                drawWheel(names); // Dibuja la ruleta con los nombres cargados
                alert('Noms carregats correctament!');
            } else {
                alert('No s\'han trobat noms a noms.txt');
            }
        })
        .catch(error => console.error('Error carregant els noms:', error));
}
