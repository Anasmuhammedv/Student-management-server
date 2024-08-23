// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import { db_connect } from './dbconnect';
import studentRoute from './Modules/student-module/Routes/student-route'

// Create an Express application
const app = express();

//middlewares
app.use(express.json())


//Routes

app.use('/api/users', studentRoute)

//connectiong to Dtabase
db_connect()

//port number creation
const port:string|number = process.env.PORT || 3000

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});