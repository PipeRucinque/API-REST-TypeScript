import { Request, Response, Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/item.controller'

const router = Router()

//[GET] http://localhost:3002/item
router.get('/:id', getItem)
router.get('/', getItems)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export { router }