// Este controlador recibe peticiones y envia respuesta
// no se mete con la logica del negocio, eso lo hace el servicio

import { Request, Response } from "express"
import { registerNewUser, loginUser  } from '../services/auth.service'

const registerCtrl = async (req: Request, res: Response) => {
    const responseUser = await registerNewUser(req.body)
    res.send(responseUser)
}

const loginCtrl = async (req: Request, res: Response) => {
    const {email, password} = req.body 
    const responseUser = await loginUser({email, password})

    if (responseUser === 'Amigo, contraseña falsa!!!') {
        res.status(403).send(responseUser)
    } else {
        res.send(responseUser)
    }

}



export { registerCtrl, loginCtrl }