import cors from 'cors'
import express, { request, response } from 'express'

const app = express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
    response.send("ID do vídeo: " + request.params.id)
})

app.listen(3333, () => console.log('Server is running on port 3333'))
