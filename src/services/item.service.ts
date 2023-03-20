// Este archivo se encarga de la logica del negocio
// Aqui se configura el CRUD

import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item.model"

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert
}

const getCar = async (id: string) => {
    const responseItem = await ItemModel.findOne({_id: id})
    return responseItem
}

const getCars = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem
}

const updateCar = async(id: string, data: Car) => {
    const responseUpdated = await ItemModel.findOneAndUpdate({_id: id}, data, {new: true})
    return responseUpdated
}

const deleteCar = async (id: string) => {
    const responseDeleted = await ItemModel.findOneAndRemove({_id: id})
    return responseDeleted
}

export { insertCar, getCars, getCar, updateCar, deleteCar }