
const { createConnectMysql } = require("../config/dbConnect")//Conexion a base de datos

const getProductos = async (bd_name, host, page) => {//Funcion de tipo asincronica.
    const limit = 100
    const offset = (page - 1) * limit
    const mysql = createConnectMysql(host, bd_name)
  
    const activities = await queryGetAllProductos(page, mysql, limit, offset)
    let jsonResult = {
      'total_rows': total_elementos,
      'total_page': total_page,
      'number_pagination': activities.length,
      'page': page,
      'data': activities
    }
    return jsonResult;
  }

  const queryGetAllProductos = async (page, mysql, limit, offset) => {//Funcion de tipo asincronica, realiza la consulta.
    // consulta de datos con numero de paginas y offset
    const activitiesQuery = "SELECT * FROM tbl_productos LIMIT " + limit + " OFFSET " + offset
    const activitie = await query(activitiesQuery, mysql);
    const totalQuery = "SELECT COUNT(*) AS idtbl_productos FROM tbl_productos "
    const total = await query(totalQuery, mysql);
  
    total_elementos = total[0]['id']
    total_page = Math.ceil(total_elementos/100)
    return activitie;
  }

//Deberia ir en herlpers
//Controla los errores de conexion
const query = (sql, mysql) => {
  return new Promise((resolve, reject) => {
    mysql.query(sql,
       (err, rows) => {
      if (err) {
        return reject(err);
      }
      return resolve(rows)
    })
  })
}

//Exportamos la funcion para usar los datos en controller/products.js.
module.exports = {
  getProductos,
}