import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = process.env.PORT || 3005

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get(
  '/',
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({
      message: 'Hello World!'
    })
  }
)

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`)
  })
} catch (error) {
  console.error(`Error occured: ${error.message}`)
}

export = app