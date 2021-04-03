import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes/index.js';

const app = express();
const port = 8080;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(cors());

// use the router and 401 anything falling through
app.use('/', router, (request, response) => {
  response.sendStatus(401);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
