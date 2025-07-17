const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
