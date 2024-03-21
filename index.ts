import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// Configuration the .env file
dotenv.config()

// Create express APP
const app: Express = express()
const port: string | number = process.env.PORT || 8000

// Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
  //Send Hello World
  res.send('API RESTFUL Express + TS + Swagger + Mongoose + JEST')
})

app.get('/hello', (req: Request, res: Response) => {
  //Send Hello World
  res.send('Hello world')
})

// Execute APP and Listen Request to PORT
app.listen(port, () =>
  console.log(
    `Servidor iniciado escuchando en el puerto: http://localhost:${port}`
  )
)
