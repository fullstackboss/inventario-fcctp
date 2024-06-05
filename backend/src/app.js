const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use("/api/auth", authRoutes);

// Verificar conexión a la base de datos
sequelize
  .authenticate()
  .then(() =>
    console.log("Conexión a la base de datos establecida correctamente.")
  )
  .catch((err) =>
    console.error("No se pudo conectar a la base de datos:", err)
  );

module.exports = app;
