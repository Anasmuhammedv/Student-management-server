import express from 'express'
import { addStudent, allUser } from '../Controller/student-controlller'

const router = express.Router()

router.post('/register',addStudent)
router.get('/students',allUser)

export default router
