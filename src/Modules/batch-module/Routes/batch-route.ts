import express from 'express'
import newBatch from '../controller/batch-controller'

const router = express.Router()

//add new batch

router.post('/register',newBatch)

export default router