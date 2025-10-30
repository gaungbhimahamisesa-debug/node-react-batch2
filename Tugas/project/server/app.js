import express from 'express';
import mainRouter from "./src/routes/main.js"
const app = express()
const port = 3000

app.use(express.json())

app.use("/api", mainRouter)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
