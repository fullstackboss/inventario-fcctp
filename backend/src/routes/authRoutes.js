const express = require("express");
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const router = express.Router();

router.post(
  "/register",
  [
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña debe tener al menos 6 caracteres"
    ).isLength({ min: 6 }),
  ],
  authController.register
);

router.post(
  "/login",
  [
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("password", "La contraseña es obligatoria").exists(),
  ],
  authController.login
);

module.exports = router;
