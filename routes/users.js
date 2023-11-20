import { Router } from "express";

const router = Router();

const usersCtrl = require('../controllers/users.js')

router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.logIn)

export default router;
