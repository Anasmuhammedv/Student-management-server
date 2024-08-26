import express from 'express'
import {addStudent, newBatch, studentBatch} from '../controller/batch-controller'
import { trycatch } from '../../../Middleware/trycatch'

const router = express.Router()

//add new batch

router.post('/register',trycatch(newBatch))
router.post('/student/:id',trycatch(addStudent))
router.get('/students/:id',trycatch(studentBatch))

export default router