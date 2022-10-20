/*
-------------------------------------TABLA BASE--------------------------------------
*/
//Declaracion de Constantes.
const { header } = require('express/lib/request');
const { getProductos } = require('../repositories/rep_productos')

const getAllProductos = async (req, res) => {
  const bd_name = process.env.BC_DATABASE_MYSQL_1
  const host = "1"

  const productos = await getProductos(bd_name, host, req.query.page);
  res.json(productos)
};

//Exportamos la funcion para usar los datos en .router/customers.js
module.exports = {
  getAllProductos,
}