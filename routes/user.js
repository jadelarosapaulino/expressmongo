const express = require('express')

const router = express.Router();


// get , post, delete, path
router.get('/home', (req, res) => {
    res.json({
            body: {
                message: 'This is the home API'
            }
        })
        //res.send();
})

router.post('/add', (req, res) => {
    res.json(req.body.name);
})

module.exports = router