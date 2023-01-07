import { Router } from 'express';
import { getEmployees } from '../controllers/employees.controller.js';
const router = Router();

router.get('/', getEmployees)

export default router