// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas o local
mongoose.connect('mongodb://127.0.0.1:27017/activos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar MongoDB:', err));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
