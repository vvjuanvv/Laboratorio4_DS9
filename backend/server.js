const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
// Ruta para manejar el formulario
app.post('/api/form', (req, res) => {
    const { name, lastname, email, edad, telefono } = req.body;
    console.log('Form data received:', { name, lastname, email, edad, telefono });
    res.json({ message: 'Form data received successfully' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));