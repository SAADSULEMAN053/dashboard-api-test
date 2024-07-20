const express = require('express');
const app = express();
require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 8080;
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());

app.get('/api/toplawyers', (req,res)=>
    {
        const TopLawyersContent = [
            {
              id:1,
              LawyerName: "Sarah Smith",
              Category:"Business & Corporate Law",
              Rate:"$200/hr",
            },
            {
              id:2,
              LawyerName:"John Lee",
              Category: "Legal Consultation on Intellectual Property",
              Rate:"$200/hr",
            },
            {
              id:3,
              LawyerName:"Emily Chen",
              Category: "Taxation & Financial Law",
              Rate:"$200/hr",
            },
            {
              id:4,
              LawyerName:"David Patel",
              Category:"Environmental and Energy Law",
              Rate:"$200/hr",
            },
            {
              id:5,
              LawyerName:"Sarah Smith",
              Category: "Environmental and Energy Law",
              Rate:"$200/hr",
            },
            {
              id:6,
              LawyerName:"Emily Chen",
              Category: "Environmental and Energy Law",
              Rate:"$200/hr",
            },
            {
              id:7,
              LawyerName:"Sarah Smith",
              Category: "Environmental and Energy Law",
              Rate:"$200/hr",
            },
          ]; 
        res.send(TopLawyersContent);
    });


app.get('/', (req, res) => {
    res.send('products api running new deploy');
});
app.get('/ping', (req, res) => {
    res.send('<=PONG=>');
});
app.get('/country', (req, res) => {
    res.send('<=PAK=>');
});

app.get('/ping', (req, res) => {
    res.send('PONG')
});
// /products
app.use('/products', productRoutes);
// /users
app.use('/users', userRoutes);

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})
