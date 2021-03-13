import express from 'express';
import router from './routes/index.js'

const app = express()
const port = 3000

// use the router and 401 anything falling through
app.use('/', router, function (req, res) {
  res.sendStatus(401)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})