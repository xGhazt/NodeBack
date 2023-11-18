import { Pacientes } from "../model/pacientes.js";
import { Medicos } from "../model/medicos.js";
import { Turnos } from "../model/turnos.js";

const createTurno = async (req,res)=>{
    try {
        const {
            medicoId,
            pacienteId,
            fecha,
            hora
        } = req.body

        const medico = await Medicos.findByPk(medicoId)
        if(!medico){
            return res.status(400).json({error: 'EL MEDICO NO EXISTE'})
        }
        const paciente = await Pacientes.findByPk(pacienteId)
        if(!paciente){
            return res.status(400).json({error: 'EL PACIENTE NO EXISTE'})
        }


        const nuevoTurno = await Turnos.create({
            medicoId,
            pacienteId,
            fecha,
            hora
        })
        
        console.log(nuevoTurno)
        res.send("TURNO AGREGADO")
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
    
    }

    const getTurnos = async (req,res)=> {
        try {
            const turnos = await Turnos.findAll()
            console.log(turnos)
            res.json(turnos)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    
    const mostrarTurno = async (req,res)=>{
    
        try {
            const { id } = req.params
            const turnos = await Turnos.findByPk(id)
            res.json(turnos)
    
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    
    
    }
    
    const deleteTurno = async (req,res)=> {
        
        try {
            const { id } = req.params
            const turno = await Turnos.findByPk(id)
            if (!turno){
                return res.json({error: "EL TURNO NO EXISTE"})
            }

            await Turnos.destroy({
                where:{
                    id
                }
            })
            res.send("TURNO ELIMINADO")
    
        } catch (error){
            res.status(500).json({message: error.message})
        }
    
    }
    
    
    const updateTurno = async (req,res) => {
        
        try {
            const { id } = req.params
            const verificarTurno = await Turnos.findByPk(id)
            if (!verificarTurno){
                return res.json({error: "EL TURNO NO EXISTE"})
            }
        
            const {
                medicoId,
                pacienteId,
                fecha,
                hora
            } = req.body
        
            const turno = await Turnos.findByPk(id)
        
            if (!turno){
                return res.status(400).json({error: "EL PACIENTE NO EXISTE"})
            }
            
            turno.medicoId = medicoId
            turno.pacienteId = pacienteId
            turno.fecha = fecha
            turno.hora = hora
           
            await turno.save()
            res.json(turno)
            
        } catch (error){
            res.status(500).json({message: error.message})
        }
        
        
        
    }
    
    




export {getTurnos, createTurno, mostrarTurno, deleteTurno, updateTurno}