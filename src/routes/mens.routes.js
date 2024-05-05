import express from 'express'
import { createMens, getMens } from '../controllers/mens.controllers.js'

const raceRouter = express.Router()

raceRouter.post('/mens', createMens)

raceRouter.get('/mens', getMens)

export default raceRouter