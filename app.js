const express = require('express')
const app = express();

const mongoose = require('mongoose');

//const urlDB = 'mongodb://host1:27017,host2:27017,host3:27017/test'

app.use(express.json());


const userRoutes = require('./routes/user');

app.use('/api/users/', userRoutes)

app.listen('3000', () => {
    console.log('Server is up and runnig!!');
})

mongoose.connect('mongodb://localhost:27017/constructora?retryWrites=true&w=mayority', { useNewUrlParser: true, useUnifiedTopology: true }, (res, err) => {
    console.log(err);

    // if (err) {
    //     console.log(err);
    // }
    //console.log(err);
    console.log(mongoose.Collection.countDocuments);

})