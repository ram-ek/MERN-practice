import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}...`)))
    .catch((error) => console.log(error.message));

// var mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://memories-db1:pMQSc0v3qr7WcZJTnsME4kF1AepgvCyZsxKImql9QWlnfuH4Y1gWZxGuw2W55djxeXxeftDsHpulUMsH6dgwOQ==@memories-db1.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@memories-db1@", function (err, db) {
//   db.close();
// });