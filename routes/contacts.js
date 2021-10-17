let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to the businessContact model

let business_contact = require('../models/contacts');

//cerating a get route for business contact page -READ operation
router.get('/', (req,res,next)=>{
    contacts.find((err, contactsList)=>{
      if(err)
     {
        return console.error(err);
     }
     else
     {
      //console.log(businesscontactList);  
        res.render('contacts',{title:'Contacts List', contactsList : contactsList})

     }
    });
});
module.exports = router;