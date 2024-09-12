document.addEventListener('DOMContentLoaded', function() {
    const characterId = window.location.pathname.split('/').pop(); // Karakter ID'sini URL'den al

    fetch(`http://localhost:3000/api/characters/${characterId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Karakter detayları alınamadı.');
            }
            return response.json();
        })
        .then(character => {
            const characterDetails = document.getElementById('character-details');
            const characterInfo = document.createElement('div');
            characterInfo.classList.add('character-info');

            const nameElement = document.createElement('h3');
            nameElement.textContent = character.name;
            characterInfo.appendChild(nameElement);

            const classRaceElement = document.createElement('p');
            classRaceElement.textContent = `${character.class} - ${character.race}`;
            characterInfo.appendChild(classRaceElement);

            const statsElement = document.createElement('p');
            statsElement.textContent = `Güç: ${character.strength}, Çeviklik: ${character.dexterity}, Dayanıklılık: ${character.constitution}, Zeka: ${character.intelligence}, Bilgelik: ${character.wisdom}, Karizma: ${character.charisma}`;
            characterInfo.appendChild(statsElement);

            if (character.photo) {
                const imgElement = document.createElement('img');
                imgElement.src = character.photo;
                imgElement.alt = `${character.name} fotoğrafı`;
                characterInfo.appendChild(imgElement);
            }

            characterDetails.appendChild(characterInfo);
        })
        .catch(error => {
            console.error('Error:', error);
            const characterDetails = document.getElementById('character-details');
            characterDetails.innerHTML = '<p>Bir hata oluştu.</p>';
        });
});
