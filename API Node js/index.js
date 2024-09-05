const express = require('express');
const connectDB = require('./db');
const Item = require('./models/Item');

const app = express();
const port = 3000;

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API!');
});

// Ruta para obtener todos los elementos
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los elementos' });
    }
});

// Ruta para obtener un elemento específico por ID
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Elemento no encontrado' });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el elemento' });
    }
});

// Ruta para crear un nuevo elemento
app.post('/items', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el elemento' });
    }
});

// Ruta para actualizar un elemento específico por ID
app.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Elemento no encontrado' });
        }
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el elemento' });
    }
});

// Ruta para eliminar un elemento específico por ID
app.delete('/items/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Elemento no encontrado' });
        }
        res.json({ message: 'Elemento eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el elemento' });
    }
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
