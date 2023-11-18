import { Pacientes } from "../model/pacientes.js";


const createPaciente = async (req,res)=>{
    try {
        const {
            nombre,
            apellido,
            dni,
            email,
            telefono
        } = req.body
        
        const nuevoPaciente = await Pacientes.create({
            nombre,
            apellido,
            dni,
            email,
            telefono
        })
        
        console.log(nuevoPaciente)
        res.send("PACIENTE AGREGADO")
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
    
    }

    const getPacientes = async (req,res)=> {
        try {
            const pacientes = await Pacientes.findAll()
            console.log(pacientes)
            res.json(pacientes)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    
    const mostrarPaciente = async (req,res)=>{
    
        try {
            const { id } = req.params
            const pacientes = await Pacientes.findByPk(id)
            res.json(pacientes)
    
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    
    
    }
    
    const deletePaciente = async (req,res)=> {
        
        try {
            const { id } = req.params

            await Pacientes.destroy({
                where:{
                    id
                }
            })
            res.send("PACIENTE ELIMINADO")
    
        } catch (error){
            res.status(500).json({message: error.message})
        }
    
    }
    
    
    const updatePaciente = async (req,res) => {
        
        try {
            const { id } = req.params
        
            const {
                nombre,
                apellido,
                dni,
                email,
                telefono
            } = req.body
        
            const paciente = await Pacientes.findByPk(id)
        
            if (!paciente){
                return res.status(400).json({error: "EL PACIENTE NO EXISTE"})
            }
    
            paciente.nombre = nombre
            paciente.apellido = apellido
            paciente.dni = dni
            paciente.email = email
            paciente.telefono = telefono
        
            await paciente.save()
            res.json(paciente)
            
        } catch (error){
            res.status(500).json({message: error.message})
        }
        
        
        
    }
    
    




export {getPacientes, createPaciente, mostrarPaciente, deletePaciente, updatePaciente}