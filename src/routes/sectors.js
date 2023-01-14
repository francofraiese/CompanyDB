import { Router } from 'express';
import { changeSectorName, createSector, deleteSector, getSectors } from '../controllers/sectors.controller.js';
const router = Router();

router.get('/', getSectors)
router.post('/', createSector)
router.put('/:id', changeSectorName)
router.delete('/:id', deleteSector)

export default router