const express = require('express')
const router = express.Router()

const postCtrl = require('../controllers/post.js')

router.post('/', postCtrl.create)
router.get('/', postCtrl.index)
router.get('/:id', postCtrl.show)
router.patch('/:id', postCtrl.update)
router.delete('/:id', postCtrl.deleteOne)
router.patch('/likes/:id', postCtrl.addLike)
router.patch('/dislikes/:id', postCtrl.addDislike)


module.exports = router
