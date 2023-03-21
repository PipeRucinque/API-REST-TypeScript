// middleware es una funcion entre la ruta y el controlador, una especie de PORTERO

import { NextFunction, Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { verifyToken } from "../utils/jwt.handle"

interface RequestExtended extends Request {
    user?: string | JwtPayload
}

const checkJWT = (req: RequestExtended, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || ' '
        const cleanJWT = jwtByUser.split(' ').pop()
        const isUser = verifyToken(`${cleanJWT}`)
        if (!isUser) {
            res.status(401).send('No tienes un JWT valido')
        } else {
            req.user = isUser
            next()
        }
    } catch (error) {
        res.status(400).send('Sesión no Valida')
    }
}

export { checkJWT }
