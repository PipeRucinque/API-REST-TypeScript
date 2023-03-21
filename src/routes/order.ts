//a esta ruta solo pueden acceder las personas que tienen sesiones activas
// una sesion activa: tiene un JWT valido

import { Router } from "express";
import { getItems } from "../controllers/order.controller";
import { checkJWT } from "../middleware/session";

const router = Router()

router.get('/', checkJWT, getItems)

export { router }