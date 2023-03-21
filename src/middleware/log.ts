// middleware es una funcion entre la ruta y el controlador, una especie de PORTERO

import { NextFunction, Request, Response } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const userAgent = req.headers['user-agent']
    console.log(userAgent)
    
    next()
}



export { logMiddleware }