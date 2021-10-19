let mongoose = require('mongoose');

//create a model class
let BcontactModel = mongoose.Schema({

    name: string,
    phone: Number,
    email: string

},
{
    collection: 'Bcontacts'
});

module.exports = mongoose.model('Bcontact', BcontactModel);