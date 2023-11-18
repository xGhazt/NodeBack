import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Medicos = sequelize.define('medicos',{
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
    especialidad: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
},{
    timestamp: false
})



