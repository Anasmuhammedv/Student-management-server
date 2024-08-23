import express from 'express'
import { addStudent, allUser, viewStudentById } from '../Controller/student-controlller'

const router = express.Router()

router.post('/register',addStudent)
router.get('/students',allUser)
router.get('/students/:id',viewStudentById)

export default router
