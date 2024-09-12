const inputValue = document.getElementById('input-value');
const colorSelect = document.getElementById('color-select');
const colorBtn = document.getElementById('colorBtn');
const colors = document.querySelector('.colors');
let main = document.getElementById('main')

let colorsArr = [];

colorBtn.addEventListener('click', () => {
    let color = inputValue.value.trim();

    if (color.startsWith('#') && color.length === 7) {
        color = color.slice(1);
    } else {
        return;
    }
    
    let colorValue = colorSelect.value.toLowerCase();
    
    const validModes = ['monochrome', 'monochrome-dark', 'monochrome-light', 'analogic', 'analogic-complement', 'triad', 'complement'];
    if (!validModes.includes(colorValue)) {
        return;
    }
    
fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorValue}`)
        .then(response => response.json())
        .then(data => {
            const colorData = data.colors.map(color => color.hex.value);
            colorsArr = colorData;
            renderColors(colorsArr);
     });
  });

const renderColors = (data) => {
    const html = data.map(color => `
        <div class="color-grid">
            <div class="color"></div>
            <div class="color-name">${color}</div>
        </div>`
    ).join('');
    
    colors.innerHTML = html;

    document.querySelectorAll('.color').forEach((element, index) => {
        element.style.backgroundColor = data[index];
    });
};


colorBtn.addEventListener('click', () => {
 main.style.backgroundColor = 'transparent';
 
});