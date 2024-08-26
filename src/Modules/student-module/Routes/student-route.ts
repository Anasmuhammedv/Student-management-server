import express from 'express'
import { addStudent, allUser, deleteStudent, updateStudent, viewStudentById } from '../Controller/student-controlller'
import { trycatch } from '../../../Middleware/trycatch'

const router = express.Router()

router.post('/register',trycatch(addStudent))
router.get('/students',trycatch(allUser))
router.get('/students/:id',trycatch(viewStudentById))
router.delete('/students/:id',trycatch(deleteStudent))
router.put('/students/:id',trycatch(updateStudent))

export default router
