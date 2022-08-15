import { Router } from 'express'
import ImageCtrl from '../controllers/imageCtrl'

const router = Router()

router.get('/', ImageCtrl.imageGetAll)

router.get('/:id', ImageCtrl.imageGetOne)

router.get('/create/:id', ImageCtrl.imageCreate)

export default router
