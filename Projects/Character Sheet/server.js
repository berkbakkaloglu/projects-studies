const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/frp', {});

const characterSchema = new mongoose.Schema({
    name: String,
    class: String,
    race: String,
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
});

const Character = mongoose.model('Character', characterSchema);

app.use(bodyParser.json());
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public')));

// Karakter kaydetme
app.post('/api/characters', async (req, res) => {
    try {
        const character = new Character(req.body);
        const savedCharacter = await character.save();
        res.status(200).send(savedCharacter);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Karakterleri listeleme
app.get('/api/characters', async (req, res) => {
    try {
        const characters = await Character.find({});
        res.status(200).send(characters);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Karakter detayları için
app.get('/character-details', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'character-details.html'));
});

// Karakter detaylarını getirme

app.get('/api/characters/:id', async (req, res) => {
    try {
        const character = await Character.findById(req.params.id);  
        if (!character) {
            return res.status(404).send('Karakter bulunamadı.');
        }
        res.status(200).json(character); // JSON formatında karakteri döndür
    } catch (err) {
        console.error('Error:', err); // Sunucudaki hatayı konsola yazdır
        res.status(500).send(err);
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));