// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/usuarios', require('./routes/usuarios'));
app.use('/proyectos', require('./routes/proyectos'));
app.use('/tareas', require('./routes/tareas'));
app.use('/asignaciones', require('./routes/asignaciones'));
app.use('/seguimiento', require('./routes/seguimiento'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
