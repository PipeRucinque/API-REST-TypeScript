import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { RequestExtended } from "../interfaces/req-ext.interface"
import { handleHTTP } from "../utils/error.handle"

const getItems = (req: RequestExtended, res: Response) => {
    try {
        res.send({
            data: 'Esto solo lo ven los usuarios con sesión abierta (JWT)',
            user: req.user
        })
    } catch (error) {
        handleHTTP(res, 'ERROR_GET_BLOG', error)
    }
}


export { getItems }