import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import routers from './src/routers';

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routers)

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/user");

app.get('/', (req, res) => res.send("hello world"))

app.listen(port,() => console.log(`Server on lesting on ${port}`))