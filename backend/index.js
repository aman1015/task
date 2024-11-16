import express from 'express'
import Connection from './Models/db.js';
import dotenv from 'dotenv';
import Router from './Routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/tasks' , Router);
app.get('/', (req, res) => {
    res.send('Hello from the server');
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
})
const USERNAME=process.env.DB_username;
const PASSWORD=process.env.DB_password;
Connection(USERNAME,PASSWORD);