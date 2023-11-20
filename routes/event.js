import { Router } from "express";

const router = Router();

const eventCtrl = require('../controllers/event.js')


router.post('/:id', commentCtrl.create)
router.delete('/:id', commentCtrl.deleteOne)
router.patch('/:id', commentCtrl.update)
router.patch('/likes/:id', commentCtrl.addLike)
router.patch('/dislikes/:id', commentCtrl.addDislike)


export default router;