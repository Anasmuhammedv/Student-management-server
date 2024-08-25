// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import { db_connect } from './dbconnect';
import studentRoute from './Modules/student-module/Routes/student-route'
import batchRoute from './Modules/batch-module/Routes/batch-route'
import swaggerUi from "swagger-ui-express"
import swaggerDocument from '../swagger-output.json'

// Create an Express application
const app = express();

//middlewares
app.use(express.json())


//swagger
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument))

//Routes

app.use('/api/users', studentRoute)
app.use('/api/batch', batchRoute)

//connectiong to Dtabase
db_connect()

//port number creation
const port:string|number = process.env.PORT || 3000

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});