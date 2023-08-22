const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

//middle war for cors
app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('I am running on CNC news service')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})


app.get('/news', (req, res) => {
    res.send(news);
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedIdNews = news.find(n => n._id === id)
    res.send(selectedIdNews);
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    if (id == 0) {
        res.send(news)
    } else {
        const newCategory = news.filter(n => n.category_id === id)
        res.send(newCategory);
    }


})

app.listen(port, () => {
    console.log(`CNC running on server ${port}`)
})