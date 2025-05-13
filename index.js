require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Importación de rutas
const usuariosRouter = require('./routes/usuarios');
const proyectosRouter = require('./routes/proyectos');
const tareasRouter = require('./routes/tareas');
const asignacionesRouter = require('./routes/asignaciones');
const seguimientoRouter = require('./routes/seguimiento');

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Rutas de la API
app.use('/api/usuarios', usuariosRouter);
app.use('/api/proyectos', proyectosRouter);
app.use('/api/tareas', tareasRouter);
app.use('/api/asignaciones', asignacionesRouter);
app.use('/api/seguimiento', seguimientoRouter);

// Arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
