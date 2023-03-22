import { Request, Response } from "express";
import dbConnect from '../config/mongo'
import { RequestExtended } from "../interfaces/req-ext.interface";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage.service";
import { handleHTTP } from "../utils/error.handle";

const getFile = async (req: RequestExtended, res: Response) => {
    try {
        const {user, file} = req
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        }
        const response = await registerUpload(dataToRegister)
        res.send(response)
    } catch (error) {
        handleHTTP(res, 'ERROR_UPLOAD_CONTROLLER', error)
    }
}

export { getFile }