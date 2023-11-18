import { Medicos } from "../model/medicos.js";


const createMedico = async (req,res)=>{
    try {
        const {
            nombre,
            apellido,
            especialidad,
            dni,
            email
        } = req.body
        
        const nuevoMedico = await Medicos.create({
            nombre,
            apellido,
            especialidad,
            dni,
            email
        })
        
        console.log(nuevoMedico)
        res.send("MEDICO AGREGADO")
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
    
    }

    const getMedicos = async (req,res)=> {
        try {
            const medicos = await Medicos.findAll()
            console.log(medicos)
            res.json(medicos)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
    
    const mostrarMedico = async (req,res)=>{
    
        try {
            const { id } = req.params
            const medicos = await Medicos.findByPk(id)
            res.json(medicos)
    
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    
    
    }
    
    const deleteMedico = async (req,res)=> {
        
        try {
            const { id } = req.params

            await Medicos.destroy({
                where:{
                    id
                }
            })
            res.send("MEDICO ELIMINADO")
    
        } catch (error){
            res.status(500).json({message: error.message})
        }
    
    }
    
    
    const updateMedico = async (req,res) => {
        
        try {
            const { id } = req.params
        
            const {
                nombre,
                apellido,
                especialidad,
                dni,
                email
            } = req.body
        
            const medico = await Medicos.findByPk(id)
        
            if (!medico){
                return res.status(400).json({error: "EL MEDICO NO EXISTE"})
            }
    
            medico.nombre = nombre
            medico.apellido = apellido
            medico.especialidad = especialidad
            medico.dni = dni
            medico.email = email
        
            await medico.save()
            res.json(medico)
            
        } catch (error){
            res.status(500).json({message: error.message})
        }
        
        
        
    }
    
    




export {getMedicos, createMedico, mostrarMedico, deleteMedico, updateMedico}