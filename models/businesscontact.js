let mongoose = require('mongoose');

//create a model class
let businessContactModel = mongoose.Schema({

    name: string,
    phone: Number,
    email: string

},
{
    collection: 'businesscontact'
});

module.exports = mongoose.model('businesscontact', businessContactModel);