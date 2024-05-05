import express from "express"
import { auth1_login, auth1_register } from "../controllers/auth1.controllers.js"

const auth1Router = express.Router()

auth1Router.post('/register', auth1_register)

auth1Router.post('/login', auth1_login)

export default auth1Router