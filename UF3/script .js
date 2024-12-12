
// Exercici 1
const button1 = document.getElementById('change-text-button');
const paragraph = document.getElementById('text-paragraph');

button1.addEventListener('click', function() {
    paragraph.textContent = 'Aquest és el text modificat després del clic.';
});
// Exercici 2
const changeBgButton = document.getElementById('change-bg-button');
const colorInput = document.getElementById('color-input');
const backgroundDiv = document.getElementById('background-div');

changeBgButton.addEventListener('click', function() {
    const color = colorInput.value.trim();
    backgroundDiv.style.backgroundColor = color; 
});

// Exercici 3
const button3 = document.getElementById('alert-button');
const missatgeInput = document.getElementById('alert-input');

button3.addEventListener('click', function(){
    const missatge = missatgeInput.value.trim();
    alert(missatge);
})

// Exercici 4
document.getElementById("validate-email-button").addEventListener("click", () => {
    const email = document.getElementById("email-input").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById("email-error");
    if (emailPattern.test(email)) {
        errorElement.textContent = "Adreça de correu vàlida.";
        errorElement.style.color = "green";
    } else {
        errorElement.textContent = "Adreça de correu no vàlida.";
        errorElement.style.color = "red";
    }
});

// Exercici 5
const hideButton = document.getElementById('hide-button');
const elementToHide = document.getElementById('hide-me');

hideButton.addEventListener('click', () => {
    elementToHide.style.display = 'none'; 
});

// Exercici 6
const toggleButton = document.getElementById('toggle-button');
const toggleDiv = document.getElementById('toggle-div');

toggleButton.addEventListener('click', () => {
    if (toggleDiv.style.display === 'none') {
        toggleDiv.style.display = 'block';
    } else {
        toggleDiv.style.display = 'none';
    }
});

// Exercici 7
const addItemButton = document.getElementById('add-item-button');
const listItemInput = document.getElementById('list-item-input');
const itemList = document.getElementById('item-list');

addItemButton.addEventListener('click', () => {
    const newItemText = listItemInput.value;

    if (newItemText.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);
        listItemInput.value = '';
    } else {
        alert('Si us plau, escriu un element per afegir-lo a la llista.');
    }
});

// Exercici 8
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment-button');

let counter = 0;

incrementButton.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});

// Exercici 9
const hoverDiv = document.getElementById('hover-div');
const hoverParagraph = document.getElementById('hover-paragraph');

function mostrarMissatge() {
    hoverParagraph.textContent = 'Has passat el ratolí per sobre del div!';
}

hoverDiv.addEventListener('mouseover', mostrarMissatge);


// Exercici 10
const imageInput = document.getElementById('image-url-input');
const changeImageButton = document.getElementById('change-image-button');
const imageElement = document.getElementById('image');

changeImageButton.addEventListener('click', () => {
    const imageUrl = imageInput.value;

    if (imageUrl.trim() !== '') {
        imageElement.src = imageUrl;
    } else {
        alert('Si us plau, introdueix una URL vàlida per a la imatge.');
    }
});

