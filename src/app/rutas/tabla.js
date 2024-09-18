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

    app.post('/pokemon', (req, resp) => {});

    app.put('/pokemon', (req, resp) => {});

    app.delete('/pokemon', (req, resp) => {});
};