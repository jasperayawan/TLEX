const express = require('express');
const bodyParser = require("body-parser");
const ParseServer = require("parse-server").ParseServer;
const ParseDashboard = require("parse-dashboard");
const userRoutes = require('../tlex-backend/routes/user')

const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());


const api = new ParseServer({
    databaseURI:process.env.MONGODB_URI,
    appId: "123",
    masterKey: "1234",
    serverURL: `http://localhost:${port}/parse`,
    cloud: "./cloud/main.js"
  });
  
  const dashboardConfig = new ParseDashboard({
    apps: [
      {
        appId: "123",
        masterKey: "1234",
        serverURL: `http://localhost:${port}/parse`, // URL where Parse Server is running
        appName: "TLEX",
      },
    ],
  });
  api.start();

  app.use("/parse", api.app);
  app.use("/dashboard", dashboardConfig);


  app.use('/api/user', userRoutes)

  app.listen(port, () => {
    console.log('Server listening to port: ', port)
  })