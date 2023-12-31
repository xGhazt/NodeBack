import app from "./app.js";
import {sequelize} from "./database/database.js";
import './model/medicos.js'
import './model/pacientes.js'
import './model/turnos.js'




async function main(){
    try {
        await sequelize.sync({force:false});
        console.log("conexion a la base de datos exitosa");

        app.listen(8080);
        console.log("servidor en el puerto 8080")


    } catch (error){
        console.error("no se pudo conectar:", error)

    }

    
}

main();
