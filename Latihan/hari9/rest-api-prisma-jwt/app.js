require("dotenv").config();
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const cors = require("cors");
const router = require("./src/routes/main");
const port = 3000;

var corsOptions = {
  origin: process.env.CORS_ALLOW_LIST,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




