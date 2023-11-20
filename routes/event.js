import { Router } from "express";
import eventCtrl from'../controllers/event.js';
const router = Router();


router.post('/:id', eventCtrl.create)
router.delete('/:id', eventCtrl.deleteOne)
router.patch('/:id', eventCtrl.update)
router.patch('/likes/:id', eventCtrl.addLike)
router.patch('/dislikes/:id', eventCtrl.addDislike)


export default router;