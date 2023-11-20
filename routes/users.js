import { Router } from "express";
import usersCtrl from '../controllers/users.js';

const router = Router();

router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.logIn)

export default router;
