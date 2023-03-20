// CRUD = (Creat, Read, Update, Delete)
// Un CONTROLADOR solo es la conexión en HTTP, es decir, recibe un request y devuelve un response, YA!!!

import { Request, Response } from "express"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service"
import { handleHTTP } from "../utils/error.handle"

const getItem = async(req: Request, res: Response) => {
    try {
        const {id} = req.params   
        const response = await getCar(id)
        const data = response ? response : '_id: item no encontrado' 
        res.send(data)
    } catch (error) {
        handleHTTP(res, 'ERROR_GET_ITEM')
    }
}
const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars()
        res.send(response)
    } catch (error) {
        handleHTTP(res, 'ERROR_GET_ITEMS')
    }
}
const postItem = async (req: Request, res: Response) => {
    try {
        const responseItem = await insertCar(req.body)
        res.send(responseItem)
    } catch (error) {
        handleHTTP(res, 'ERROR_POST_ITEM', error)
    }
}
const updateItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const body = req.body
        const responseItem = await updateCar(id, body)
        res.send(responseItem)
    } catch (error) {
        handleHTTP(res, 'ERROR_UPDATE_ITEM')
    }
}
const deleteItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const response = await deleteCar(id)
        res.send(response)        
    } catch (error) {
        handleHTTP(res, 'ERROR_DELETE_ITEM')
    }
}

export {getItem, getItems, updateItem, postItem, deleteItem}