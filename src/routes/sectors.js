import { Router } from 'express';
import { changeSectorName, createSector, getSectors } from '../controllers/sectors.controller.js';
const router = Router();

router.get('/', getSectors)
router.post('/', createSector)
router.put('/:id', changeSectorName)

export default router