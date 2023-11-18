import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Turnos = sequelize.define('turnos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medicoId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'medicos',
            key:'id'
        },
        foreignKey:true
    },
    pacienteId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pacientes',
            key:'id'
        },
        foreignKey:true
    },
    fecha: {
        type: DataTypes.DATEONLY
    },
    hora: {
        type: DataTypes.STRING
    },
    
},{
    timestamp: false
})