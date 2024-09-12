document.querySelectorAll('.increment').forEach(button => {
    button.addEventListener('click', function() {
        const stat = this.getAttribute('data-stat');
        const input = document.getElementById(stat);
        input.value = parseInt(input.value) + 1;
    });
});

document.querySelectorAll('.decrement').forEach(button => {
    button.addEventListener('click', function() {
        const stat = this.getAttribute('data-stat');
        const input = document.getElementById(stat);
        if (parseInt(input.value) > 0) {  // Değerin negatif olmaması için kontrol
            input.value = parseInt(input.value) - 1;
        }
    });
});

document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const character = {
        name: document.getElementById('name').value,
        class: document.getElementById('class').value,
        race: document.getElementById('race').value,
        strength: document.getElementById('strength').value,
        dexterity: document.getElementById('dexterity').value,
        constitution: document.getElementById('constitution').value,
        intelligence: document.getElementById('intelligence').value,
        wisdom: document.getElementById('wisdom').value,
        charisma: document.getElementById('charisma').value,
    };

    fetch('http://localhost:3000/api/characters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
