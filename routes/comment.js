import { Router } from "express";
import commentCtrl from '../controllers/comment.js';

const router = Router();

router.post('/:id', commentCtrl.create)
router.delete('/:id', commentCtrl.deleteOne)
router.patch('/:id', commentCtrl.update)
router.patch('/likes/:id', commentCtrl.addLike)
router.patch('/dislikes/:id', commentCtrl.addDislike)


export default router;