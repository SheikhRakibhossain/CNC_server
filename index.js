const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const  cors = require('cors')

//middle war for cors
app.use(cors());

const categories = require('./data/categories.json')

app.get('/', (req, res)=>{
    res.send('I am running on CNC news service')
})

app.get('/categories',(req, res)=>{
    res.send(categories)

})
app.get('/categories/:id',(req, res)=>{
    res.send(categories)

})


app.listen(port, ()=>{
    console.log(`CNC running on server ${port}`)
})