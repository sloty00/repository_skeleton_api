//Declaracion Constantes.
const express = require('express');
require('dotenv').config();
const cors = require("cors");
const app = express();
//const { router } = require('./router/master_detail_movement')

//Usar ciertos esquemas.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Llamada a las rutas.
app.use('/api/productos', require('./routers/rou_productos')); //<--- (http://localhost:3000/api/productos?page=1)

//Ruta de referencia.
app.get('/', function (req, res) {
    res.send('.');
});

//Activacion del servidor.
app.listen(process.env.BC_PORT_SERVER_1, () => {
    console.log(`SERVIDOR CORRIENDO EN PUERTO ${process.env.BC_PORT_SERVER_1}`)
});