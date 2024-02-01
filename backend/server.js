const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');


// init
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ['http://localhost:3002'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    Credential: true
}));
dotenv.config();




app.get('/', (req, res) => {
    res.status(201).json({ message: "Hello Hassan_Nadeem" })
})
const PORT = process.env.PORT
// console.log(PORT);
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})