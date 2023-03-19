// CRUD = (Creat, Read, Update, Delete)
// Un CONTROLADOR solo es la conexión en HTTP, es decir, recibe un request y devuelve un response, YA!!!

import { Request, Response } from "express"
import { insertItem } from "../services/item.service"
import { handleHTTP } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHTTP(res, 'ERROR_GET_ITEM')
    }
}
const getItems = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHTTP(res, 'ERROR_GET_ITEMS')
    }
}
const postItem = async (req: Request, res: Response) => {
    try {
        const responseItem = await insertItem(req.body)
        res.send(responseItem)
    } catch (error) {
        handleHTTP(res, 'ERROR_POST_ITEM', error)
    }
}
const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHTTP(res, 'ERROR_UPDATE_ITEM')
    }
}
const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHTTP(res, 'ERROR_DELETE_ITEM')
    }
}

export {getItem, getItems, updateItem, postItem, deleteItem}