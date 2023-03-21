//JWT: JsonWebToken es un metodo de autorización

import { sign, verify } from "jsonwebtoken"
const JWT_Secret = process.env.JWT_SECRET || 'token123'

const generateToken = (id: string) => {
    const jwt = sign({id}, JWT_Secret, {expiresIn: '2h'})
    return jwt
}

const verifyToken = (jwt:string) => {
    const isOk = verify(jwt, JWT_Secret)
    return isOk
}

export { generateToken, verifyToken }