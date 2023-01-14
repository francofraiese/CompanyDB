import { Router } from 'express';
import Employees from './employees.js';
import Sectors from './sectors.js';
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/sectors', Sectors)
router.use('/employees', Employees);

export default router;
