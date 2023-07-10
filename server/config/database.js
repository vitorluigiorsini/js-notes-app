const mongoose = require('mongoose')
mongoose.Promise = global.Promise

require('dotenv').config()
const MONGO_URL = process.env.DATABASE_URL

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Connection succesful'))
  .catch((err) => console.log(err))
