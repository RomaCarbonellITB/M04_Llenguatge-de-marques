let names = []; // Lista de nombres cargados
let rotationAngle = 0; // Ángulo actual de la ruleta

document.getElementById('nom').addEventListener('click', () => {
    // Cargar los nombres desde nombres.txt
    fetch('noms.txt')
        .then(response => response.text())
        .then(data => {
            names = data.split(/\r?\n/).filter(name => name.trim() !== '');
            drawWheel();  // Dibuja la ruleta con los nombres cargados
            document.getElementById('tirar').disabled = false;  // Habilita el botón de girar
        })
        .catch(error => {
            console.error('Error al cargar los nombres:', error);
            alert('No se pudieron cargar los nombres.');
        });
});

document.getElementById('tirar').addEventListener('click', () => {
    spinWheel();
});

function drawWheel() {
    const canvas = document.getElementById('ruleta');
    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2;  // Usamos el nuevo tamaño del canvas
    const totalNames = names.length;

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const anglePerSlice = (2 * Math.PI) / totalNames;

    for (let i = 0; i < totalNames; i++) {
        const startAngle = i * anglePerSlice + rotationAngle;
        const endAngle = startAngle + anglePerSlice;

        // Dibujar segmento
        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = 
        i % 10 === 0 ? '#FF6347' : 
        i % 10 === 1 ? '#4682B4' : 
        i % 10 === 2 ? '#32CD32' : 
        i % 10 === 3 ? '#FFD700' : 
        i % 10 === 4 ? '#FF4500' : 
        i % 10 === 5 ? '#008080' : 
        i % 10 === 6 ? '#9932CC' : 
        i % 10 === 7 ? '#FF1493' : 
        i % 10 === 8 ? '#00CED1' : 
        '#ADFF2F'; // Verde amarillento
            ctx.fill();
        ctx.stroke();

        // Dibujar texto
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(startAngle + anglePerSlice / 2);
        ctx.textAlign = 'right';
        ctx.font = 'bold 16px Arial';  // Aumentamos el tamaño de la fuente
        ctx.fillStyle = '#fff';  // Color blanco para el texto
        ctx.fillText(names[i], radius - 10, 5);
        ctx.restore();
    }

    // Dibuja el marcador (triángulo) en el borde derecho de la ruleta (estático)
    const markerX = canvas.width - 20;  // Fijamos el marcador al borde derecho
    const markerY = canvas.height / 2;  // En el centro vertical de la ruleta

    ctx.beginPath();
    ctx.moveTo(markerX, markerY);  // Apunta al borde de la ruleta
    ctx.lineTo(markerX - 10, markerY - 10);  // Lado superior del triángulo
    ctx.lineTo(markerX - 10, markerY + 10);  // Lado inferior del triángulo
    ctx.closePath();
    ctx.fillStyle = 'black';  // Color del marcador
    ctx.fill();
}

function spinWheel() {
    const spinTime = 4000; // Tiempo total de giro en milisegundos
    const totalRotation = Math.random() * 2 * Math.PI + 10 * Math.PI; // 10 vueltas + aleatorio
    const startTime = performance.now();

    function animateSpin(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / spinTime, 1);
        const easing = 1 - Math.pow(1 - progress, 3); // Efecto ease-out
        rotationAngle = totalRotation * easing;

        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animateSpin);
        } else {
            // Calcular el nombre seleccionado
            const totalNames = names.length;
            const anglePerSlice = (2 * Math.PI) / totalNames;
            const normalizedAngle = (2 * Math.PI - (rotationAngle % (2 * Math.PI))) % (2 * Math.PI);
            const selectedIndex = Math.floor(normalizedAngle / anglePerSlice) % totalNames;

            // Mostrar el nombre seleccionado
            document.getElementById('sort-nom').textContent = names[selectedIndex];
        }
    }

    requestAnimationFrame(animateSpin);
}
