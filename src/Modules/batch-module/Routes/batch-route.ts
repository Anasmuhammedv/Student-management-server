import express from 'express'
import {addStudent, newBatch} from '../controller/batch-controller'

const router = express.Router()

//add new batch

router.post('/register',newBatch)
router.post('/student/:id',addStudent)

export default router