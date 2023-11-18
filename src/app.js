import express from 'express';
// const frontUrl = 'http://localhost:3000'
const frontUrl = 'https://react-front-five.vercel.app'


import medicosRoutes from './routes/medicos.routes.js'
import pacientesRoutes from './routes/pacientes.routes.js'
import turnosRoutes from './routes/turnos.routes.js'


const app = express();


//middlewares

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', frontUrl);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(express.json());

//routes
app.use(medicosRoutes)
app.use(pacientesRoutes)
app.use(turnosRoutes)

export default app
