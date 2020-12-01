require('dotenv').config()
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

const DB_URI = process.env.MONGODB_URL

const app = express();
const PORT = process.env.PORT;

// MongoDb Connection
mongoose.connect(DB_URI, {
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

app.get('/', (req, res) => { 
  res.send('Welcome to app homePage')
})

app.listen(PORT, () => { 
  console.log(`App running on port ${PORT}`)
})