import express from "express";
import cors from "cors";
import 'dotenv/config'
import { router } from "./routes";
import db from './config/mongo'

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(express.urlencoded({ extended: true }));

db().then(() => console.log(`APP conectada a la BBDD`))

const PORT = process.env.PORT || 3001
app.listen (PORT, () => {
    console.log(`APP escuchando por el puerto ${PORT}`);
})