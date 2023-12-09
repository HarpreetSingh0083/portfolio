const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://ispeedy6870:hitman5656@cluster0.0otth0j.mongodb.net/')
// mongoose.connect('mongodb+srv://codewithaj:rTGgX8g7klJb5WXE@cluster0.qcpcrk3.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log(`connected`);
    }).catch((error) => {
        console.log(error);
    })