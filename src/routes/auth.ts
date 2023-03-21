import { Request, Response, Router } from 'express'
import { registerCtrl, loginCtrl } from '../controllers/auth.controller'

const router = Router()

//[POST]http://localhost:3002/auth/register
router.post('/register', registerCtrl)
//[POST]http://localhost:3002/auth/login
router.post('/login', loginCtrl)

export { router }