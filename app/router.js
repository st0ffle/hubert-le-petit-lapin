import express from 'express'
import * as controllers from './controllers.js'

const router = express.Router()

router.get('/', controllers.home)
router.get('/:location', controllers.location)

export default router