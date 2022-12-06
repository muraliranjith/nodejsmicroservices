import express from 'express'
import { json } from 'body-parser'
import router from './routes'
const { signupRouter } = router

const app = express()
app.use(json())
app.use(signupRouter)
export default app
