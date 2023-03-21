import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ({email, password, name}: User) => {
    const checkUser = await UserModel.findOne({email})
    if(checkUser) return 'User already exists'
    const passwordHashed = await encrypt(password)
    const registerNewUser = await UserModel.create({
        email, 
        password: passwordHashed, 
        name
    })
    return registerNewUser
}

const loginUser = async ({email, password}: Auth) => {
    const checkUser = await UserModel.findOne({email})
    if(!checkUser) return 'User not exists'

    const passwordHashed = checkUser.password
    const isCorrect = await verified(password, passwordHashed)

    if (!isCorrect) return 'Amigo, contraseña falsa!!!'

    const token = generateToken(checkUser.email)
    const data = {
        token,
        user: checkUser
    }
    return data
}
export { registerNewUser, loginUser }