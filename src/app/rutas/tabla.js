const conn = require('../../config/database');
module.exports = (app) => {
    app.get('/pokemon', (req, resp) => {
        let inst = "SELECT id, nombre, tipo, generacion FROM pokemon";
        conn.query(inst, (err, data)=>{
            if(err){
                resp.json({status:1, mensaje:"Error en GET DB"});
            } else {
                resp.json({status:0, mensaje:"Datos encontrados", data:data});
            }
        });
    });

    app.post('/pokemon', (req, resp) => {
        let inst = `INSERT INTO pokemon (id, nombre, tipo, generacion) VALUES ('${req.body.id}', '${req.body.nombre}', '${req.body.tipo}', '${req.body.generacion}')`;
        conn.query(inst, (err, data)=>{
            if(err){
                resp.json({status:1, mensaje:"Error en POST DB"});
            } else {
                resp.json({status:0, mensaje:"pokemon insertado"});
            }
        });
    });

    app.put('/pokemon/:id', (req, resp) => {
        let inst = `UPDATE pokemon SET nombre = '${req.body.nombre}', tipo = '${req.body.tipo}', generacion = '${req.body.generacion}' WHERE id='${req.params.id}'`;
        conn.query(inst, (err, data)=>{
            if(err){
                resp.json({status:1, mensaje:"Error en POST DB"});
            } else {
                resp.json({status:0, mensaje:"pokemon actualizado"});
            }
        });
    });

    app.delete('/pokemon/:id', (req, resp) => {
        let inst = `DELETE FROM pokemon WHERE id='${req.params.id}'`;
        conn.query(inst, (err, data)=>{
            if(err){
                resp.json({status:1, mensaje:"Error en POST DB"});
            } else {
                resp.json({status:0, mensaje:"pokemon eliminado"});
            }
        });
    });
};