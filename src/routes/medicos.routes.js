import { Router } from 'express';
import { createMedico ,getMedicos, mostrarMedico, deleteMedico, updateMedico } from '../controllers/medicos.controllers.js'

const router = Router()

router.get("/medicos",getMedicos)
router.post("/medicos",createMedico)
router.put("/medicos/:id",updateMedico)
router.delete("/medicos/:id",deleteMedico)
router.get("/medicos/:id",mostrarMedico)


export default router