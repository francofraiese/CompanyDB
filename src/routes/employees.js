import { Router } from 'express';
import { getEmployeeById, getEmployees, uploadEmployee } from '../controllers/employees.controller.js';
const router = Router();

router.get('/', getEmployees)
router.post('/', uploadEmployee)
router.get('/:id', getEmployeeById)

export default router