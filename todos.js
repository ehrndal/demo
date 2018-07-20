const express = require('express');
const router = express.Router();

const items = [
    { id: 1, desc: "hello" },   
    { id: 2, desc: "hello2" },
    { id: 3, desc: "hello3" },
    { id: 4, desc: "hello4" } 
];

router.get('/', (req, res) => {
    //load data from DB here
    res.render('index', {
        title: 'My App',
        items: items
    });
});

router.post('/add', (req, res) => {
    const newItem = req.body.newItem;
    items.push({ id: 4, desc: newItem });

    res.redirect('/');
});

module.exports = router;