require('dotenv').config()
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/playerRoutes';


const DB_URI = process.env.MONGODB_URL

const app = express();
const PORT = process.env.PORT;

// MongoDb Connection
mongoose.connect(DB_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => { 
    console.log(`MongoDB connection success`)
  })
  .catch((err) => { 
    console.log('Connection Failed:', err)
  })

// body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

routes(app);

app.get('/', (req, res) => { 
  res.send('Welcome to app homePage')
})

app.listen(PORT, () => { 
  console.log(`App running on port ${PORT}`)
})