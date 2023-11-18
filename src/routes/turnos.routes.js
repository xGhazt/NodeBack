import { Router } from "express";
import { createTurno, getTurnos, mostrarTurno, deleteTurno, updateTurno } from "../controllers/turnos.controllers.js";

const router = Router()

router.get("/turnos",getTurnos)
router.post("/turnos",createTurno)
router.put("/turnos/:id",updateTurno)
router.delete("/turnos/:id",deleteTurno)
router.get("/turnos/:id",mostrarTurno)


export default router