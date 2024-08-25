import express from 'express'
import {addStudent, newBatch, studentBatch} from '../controller/batch-controller'

const router = express.Router()

//add new batch

router.post('/register',newBatch)
router.post('/student/:id',addStudent)
router.get('/student/:id',studentBatch)

export default router