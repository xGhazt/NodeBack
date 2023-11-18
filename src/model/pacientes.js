import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Pacientes = sequelize.define('pacientes',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.INTEGER
    }
},{
    timestamp: false
})