const app = require('./config/server');
require('./app/rutas/tabla')(app);

app.listen(8080, ()=> console.log("server running on port 8080"));
