//Declaracion Constantes.
const { Router } = require('express');
const router = Router();
const { getAllProductos } = require('../controllers/ctrl_productos')

//Rutas.
router.get('/', getAllProductos);

//Exportamos las funciones para usar en server.js.
module.exports = router;