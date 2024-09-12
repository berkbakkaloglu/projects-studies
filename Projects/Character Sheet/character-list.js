document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/characters')
        .then(response => response.json())
        .then(characters => {
            const characterList = document.getElementById('character-list');
            characters.forEach(character => {
                const li = document.createElement('li');
                li.classList.add('character-item'); // Karakter öğesine bir sınıf ekleyin

                // Karakter bilgilerini içeren bir div oluştur
                const characterInfo = document.createElement('div');
                characterInfo.classList.add('character-info');

                // Karakter adı
                const nameElement = document.createElement('h3');
                nameElement.textContent = character.name;
                characterInfo.appendChild(nameElement);

                // Sınıf ve ırk
                const classRaceElement = document.createElement('p');
                classRaceElement.textContent = `${character.class} - ${character.race}`;
                characterInfo.appendChild(classRaceElement);

                // Güç, çeviklik, dayanıklılık, zeka, bilgelik ve karizma
                const statsElement = document.createElement('p');
                statsElement.textContent = `Güç: ${character.strength}, Çeviklik: ${character.dexterity}, Dayanıklılık: ${character.constitution}, Zeka: ${character.intelligence}, Bilgelik: ${character.wisdom}, Karizma: ${character.charisma}`;
                characterInfo.appendChild(statsElement);

                // Karakter fotoğrafı
                if (character.photo) {
                    const imgElement = document.createElement('img');
                    imgElement.src = character.photo;
                    imgElement.alt = `${character.name} fotoğrafı`;
                    characterInfo.appendChild(imgElement);
                }

                // Karakter bilgilerini listeye ekle
                li.appendChild(characterInfo);
                characterList.appendChild(li);

                // Karakter öğesine tıklandığında karakter detaylarını gösteren bir işlevi çağırın
                li.addEventListener('click', function() {
                    // Tıklanan karakterin ID'sini alarak karakter detayları sayfasına yönlendirin
                    window.location.href = `character-details.html?id=${character._id}`;
                });
            });
        })
        .catch(error => console.error('Error:', error));
});
