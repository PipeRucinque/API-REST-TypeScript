import { hash, compare } from "bcryptjs"


const encrypt = async (password: string) => {
    const passwordHash = await hash(password, 10)
    return passwordHash
}


const verified = async (password: string, passwordHashed: string) => {
    const isCorrect = await compare(password, passwordHashed)
    return isCorrect
}

export { encrypt, verified }