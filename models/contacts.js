let mongoose = require('mongoose');

//create a model class
let contactsModel = mongoose.Schema({

    name: string,
    phone: Number,
    email: string

},
{
    collection: 'contacts'
});

module.exports = mongoose.model('contacts', contactsModel);