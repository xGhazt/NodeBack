import { Router } from 'express';
import {createPaciente, getPacientes, mostrarPaciente, deletePaciente, updatePaciente} from "../controllers/pacientes.controllers.js";

const router = Router()

router.get("/pacientes",getPacientes)
router.post("/pacientes",createPaciente)
router.put("/pacientes/:id",updatePaciente)
router.delete("/pacientes/:id",deletePaciente)
router.get("/pacientes/:id",mostrarPaciente)


export default router